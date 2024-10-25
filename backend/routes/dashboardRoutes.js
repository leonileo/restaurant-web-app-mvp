const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/asyncHandler.js');
const Event = require('../models/eventModel');
const Food = require('../models/foodModel');

router.get('/', asyncHandler(async (req, res) => {
    const eventLength = await (await Event.find({})).length
    const food = await Food.find({}).sort({$natural: -1});
    const foodLength = (await Food.find({})).length;
    const specialFoods = await Food.find({isSpecial: true});
    const specialLength = (await Food.find({isSpecial: true})).length;


    res.json({eventLength, food, specialFoods, specialLength, foodLength})
}))

module.exports = router