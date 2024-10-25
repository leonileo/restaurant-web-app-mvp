// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// accountRoutes.js
// Import necessary modules
const express = require('express');
const {protect, admin} = require('../middleware/authMiddleware.js');
const {
    addUser,
    getUserAccount,
    updateUserAccount,
} = require('../controllers/accountController.js')

const router = express.Router();

router.route('/')
.post(addUser)
.get(protect, admin, getUserAccount)
.put(protect, admin, updateUserAccount)

module.exports = router
// PROJECT POWERD BY LABA CREATIVES