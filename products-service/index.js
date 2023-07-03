const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

const {connect} = require('./middlewares/rabbitConnection');

mongoose.connect(
    "mongodb://localhost/products-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

connect();

const productsRoutes = require('./routes/products.routes');
app.use(bodyParser.json());
app.use(productsRoutes);

app.listen(3001, () => {
    console.log(`Products-Service at 3001`);
});