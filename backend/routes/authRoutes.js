// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// authRoutes.js
// Import necessary modules
const express = require('express');
const { admin } = require('../middleware/authMiddleware.js');
const {
    loginUser,
    logoutUser
} = require('../controllers/authController.js');
const router = express.Router();

router.route('/login')
.post(admin, loginUser)
router.route('/logout')
.post(admin, logoutUser)

module.exports = router
// PROJECT POWERD BY LABA CREATIVES