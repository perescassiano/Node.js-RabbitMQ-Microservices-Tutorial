const User = require('../models/auth.model');
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {

    const { email, password, name } = req.body;
    const userExists = await User.findOne({ email });
    console.log(req.body);

    if (userExists) {
        return res.json({ message: "User already exists" });
    } else {
        const newUser = new User({
            email,
            name,
            password,
        });
        console.log(newUser);
        await newUser.save();
        return res.json(newUser);
    }

}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "User doesn't exist" });
    } else {
        if (password !== user.password) {
            return res.json({ message: "Password Incorrect" });
        }
        const payload = {
            email,
            name: user.name
        };
        jwt.sign(payload, "secret", (err, token) => {
            if (err) console.log(err);
            else return res.json({ token: token });
        });
    }
}

