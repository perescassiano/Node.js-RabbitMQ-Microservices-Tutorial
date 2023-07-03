const Product = require('../models/products.model');

let order;

const {channel} = require('../middlewares/rabbitConnection')

exports.create = async (req, res) => {
    const { name, description, price } = req.body;
    const newProduct = new Product({
        name,
        description,
        price,
    });
    await newProduct.save();
    return res.json(newProduct);
}

exports.buy = async (req, res) => {
    
    console.log(req.body)
    const { ids } = req.body;
    const products = await Product.find({ _id: { $in: ids } });
    await channel().sendToQueue(
        "ORDER",
        Buffer.from(
            JSON.stringify({
                products,
                userEmail: req.user.email,
            })
        )
    );
    await channel().consume("PRODUCT", (data) => {
        console.log("Product")
        
        order = JSON.parse(data.content);
        console.log(order)
    });
    console.log(order);
    return res.json(order);
}