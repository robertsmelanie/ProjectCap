const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new product
router.post('/products', async (req, res) => {
    const { title, image, price, description, keywords } = req.body;
    const newProduct = new Product({ title, image, price, description, keywords });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
