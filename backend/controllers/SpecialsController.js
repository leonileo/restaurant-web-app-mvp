// PROJECT POWERD BY LABA CREATIVES
// specialsController.js
// Import necessary modules
const asyncHandler = require("../middleware/asyncHandler.js");
const Food = require('../models/foodModel.js');

// @desc    Register special food
// @route   PUT /apiv1/special/
// @access  Private
const addSpecial = asyncHandler( async(req, res) => {
    const {code} = req.body;

    const food = await Food.findOne({code: code })

    if (food) {
        food.isSpecial = true;

        const updatedFood = await food.save();
        res.json(updatedFood);
    } else {
        throw new Error('Food not found');
    }

})

// @desc    Return all special foods
// @route   GET /apiv1/special
// @access  Public
const getSpecials =  asyncHandler( async(req, res) => {
    const foods = await Food.find({isSpecial: true}).sort({$natural: -1});

    res.status(200).json(foods)
})

// @desc    Update special
// @route   PUT /apiv1/special/:id
// @access  Private
const updateSpecial = asyncHandler( async(req, res) => {
    const { isSpecial } = req.body;

    const food = await Food.findById(req.params.id);

    if (food) {
        food.isSpecial = isSpecial;
        
        const updatedFood = await food.save()
        res.json(updatedFood);
    } else {
        res.status(404);
        throw new Error('Food not found');
    }
})

module.exports = {
    addSpecial,
    getSpecials,
    updateSpecial
}
// PROJECT POWERD BY LABA CREATIVES