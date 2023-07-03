const express = require('express');

const isAuthenticated = require("../middlewares/isAuthenticated");
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.post('/product/create', isAuthenticated.isAuthenticated, productsController.create);
router.post('/product/buy', isAuthenticated.isAuthenticated, productsController.buy);

module.exports = router;