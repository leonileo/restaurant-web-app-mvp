// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// authRoutes.js
// Import necessary modules
const express = require('express');
const {
    loginUser,
    logoutUser
} = require('../controllers/authController.js');
const router = express.Router();

router.route('/login')
.post(loginUser);
router.route('/logout')
.post(logoutUser)

module.exports = router
// PROJECT POWERD BY LABA CREATIVES