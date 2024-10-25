// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// homePageRoutes.js
// Import necessary modules
const express = require('express');
const Food = require('../models/foodModel');
const Event = require('../models/eventModel');
const Category = require('../models/categoryModel');
const router = express.Router();

// specials
router.get('/specials', async (req, res) => {
    const specials = (await Food.find({isSpecial: true}).sort({$natural: -1})).slice(0, 3);
    
    res.status(200).json(specials)
})

// foods
router.get('/foods', async (req, res) => {
    const foods = (await Food.find({}).sort({$natural: -1}));
    
    res.status(200).json(foods)
})

// events
router.get('/events', async (req, res) => {
    const events = (await Event.find({}).sort({$natural: -1})).slice(0, 3);

    res.status(200).json(events);
})

// categories
router.get('/categories', async (req, res) => {
    const categories = await Category.find({}).sort({$natural: -1});

    res.status(200).json(categories);
})

module.exports = router;
// PROJECT POWERD BY LABA CREATIVES