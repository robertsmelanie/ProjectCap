const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    ItemTitle: { type: String, required: true },
    Image: { type: String },
    Price: { type: String, required: true },
    Description: { type: String, required: true },
    Keywords: { type: Array },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;