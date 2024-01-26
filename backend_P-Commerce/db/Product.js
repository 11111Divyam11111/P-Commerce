const mongoose = require('mongoose');
require('./config');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    url:String,
    company:String
});

module.exports = mongoose.model("products",productSchema);

