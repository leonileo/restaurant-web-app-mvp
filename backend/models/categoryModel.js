// PROJECT POWERD BY LABA CREATIVES
// DATA SCHEMA
// categoryModel.js
// Import necessary modules
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: {type: String, required: true, unique: true}
})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
// PROJECT POWERD BY LABA CREATIVES