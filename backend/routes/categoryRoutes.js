// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// categoryRoutes.js
// Import necessary modules
const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const Category = require('../models/categoryModel.js');
const asyncHandler = require('../middleware/asyncHandler.js');
const router = express.Router();

router.route('/')

// @desc    Create catagory
// @route   POST /apiv1/category
// @access  Private
.post(asyncHandler(
        async (req, res) => {
            const { categoryName } = req.body;
            const newCategory = new Category({
                categoryName: categoryName
            })

            const createdCategory = await newCategory.save();
            res.status(201).json(createdCategory);
        }
    )    
)

// @desc    Return all categories
// @route   GET /apiv1/categories
// @access  Public
.get(asyncHandler( async (req, res) => {
    const categories = await Category.find({});

    res.status(200).json(categories)
}));

router.route('/:id')

// @desc    Delete a category
// @route   DELETE /apiv1/categories/:id
// @access  Private
.delete(asyncHandler( async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (category) {
        await Category.deleteOne({ _id: req.params.id })
        res.json("Category deleted successfully")
    } else{
        res.status(404);
        throw new Error('Category not found!')
    }
}))

module.exports = router
// PROJECT POWERD BY LABA CREATIVES