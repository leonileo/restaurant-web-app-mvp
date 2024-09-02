// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// specialsRoutes.js
// Import necessary modules
const express = require('express');
const {
    addSpecial,
    getSpecials,
    updateSpecial
} = require('../controllers/SpecialsController.js')

const router = express.Router();

router.route('/')
.put(addSpecial)
.get(getSpecials);
router.route('/:id')
.put(updateSpecial)

module.exports = router
// PROJECT POWERD BY LABA CREATIVES