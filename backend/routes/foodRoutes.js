// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// foodRoutes.js
// Import necessary modules
const express = require('express');
const {protect, admin} = require('../middleware/authMiddleware.js');
const {
    addFood,
    updateFood,
    getFoods,
    deleteFood
} = require('../controllers/foodController.js');

const router = express.Router();

router.route('/')
.post(protect, admin, addFood)
.get(getFoods);
router.route('/:id')
.put(protect, admin, updateFood)
.delete(protect, admin, deleteFood)

module.exports = router
// PROJECT POWERD BY LABA CREATIVES