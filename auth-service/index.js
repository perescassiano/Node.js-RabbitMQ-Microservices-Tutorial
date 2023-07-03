const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb://localhost/auth-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const authRoutes = require('./routes/auth.routes');
app.use(bodyParser.json());
app.use(authRoutes);

app.listen(3000, () => {
    console.log(`Auth-Service at 3000`);
});