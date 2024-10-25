// PROJECT POWERD BY LABA CREATIVES
// DATA SCHEMA
// foodModel.js
// Import necessary modules
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    ingredient: {type: Array, required: true},
    price: {type: Number, required: true},
    code: {type: Number, required: true, unique: true},
    picture: {type: String, required: true},
    isSpecial: {type: Boolean},
    category: {type: String, required: true},
}, {timestamps: true});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
// PROJECT POWERD BY LABA CREATIVES