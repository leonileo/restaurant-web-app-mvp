// PROJECT POWERD BY LABA CREATIVES
// foodController.js
// Import necessary modules
const asyncHandler = require("../middleware/asyncHandler.js");
const Food = require('../models/foodModel.js');

// @desc    Register food
// @route   POST /apiv1/food
// @access  Private
const addFood = asyncHandler( async(req, res) => {
    const { name, ingredient, price, code, picture, isSpecial, category } = req.body;

    const food = new Food({
        user: req.user._id,
        name: name, 
        ingredient: ingredient, 
        price: price, 
        code: code, 
        picture: picture, 
        isSpecial: isSpecial ? isSpecial : false, 
        category: category
    })

    const createdFood = await food.save();
    res.status(201).json(createdFood)
})

// @desc    Return all foods
// @route   GET /apiv1/food
// @access  Public
const getFoods =  asyncHandler( async(req, res) => {
    const foods = await Food.find({}).sort({$natural: -1});

    res.status(200).json(foods)
})

// @desc    Update food
// @route   PUT /apiv1/food/:id
// @access  Private
const updateFood = asyncHandler( async(req, res) => {
    const { name, ingredient, price, code, picture, category } = req.body;

    const food = await Food.findById(req.params.id)

    if (food) {
        food.name = name
        food.ingredient = ingredient 
        food.price = price 
        food.code = code 
        food.picture = picture 
        food.category = category 

        const updatedFood = await food.save()
        res.json(updatedFood)
    } else {
        res.status(404);
        throw new Error('Food not found');
    }
});

// @desc    Delete a Food
// @route   DELETE /apiv1/Food/:id
// @access  Private
const deleteFood = asyncHandler(async(req, res) => {
    const food = await Food.findById(req.params.id);

    if (food) {
        await food.deleteOne({_id: food._id});
        res.status(200).json({
            message: "Food deleted sucessfully!"
        })
    }
})

module.exports = {
    addFood,
    getFoods,
    updateFood,
    deleteFood
}
// PROJECT POWERD BY LABA CREATIVES