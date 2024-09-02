// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// foodRoutes.js
// Import necessary modules
const express = require('express');
const {admin} = require('../middleware/authMiddleware.js');
const {
    addFood,
    updateFood,
    getFoods,
    deleteFood
} = require('../controllers/foodController.js');

const router = express.Router();

router.route('/')
.post(admin, addFood)
.get(getFoods);
router.route('/:id')
.put(admin, updateFood)
.delete(admin, deleteFood)

module.exports = router
// PROJECT POWERD BY LABA CREATIVES