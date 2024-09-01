// PROJECT POWERD BY LABA CREATIVES
// accountController.js
// Import necessary modules
const asyncHandler = require("../middleware/asyncHandler.js");
const User = require('../models/userModel.js')
const generateToken = require('../utils/generateToken.js')

// @desc    Add user
// @route   POST /apiv1/account
// @access  Private
const addUser = asyncHandler( async (req, res) => { 
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    } 
    const user = await User.create({
        name, email, password
    })

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Get user account information
// @route   GET /apiv1/account
// @access  Private
const getUserAccount = asyncHandler ( async(req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
})

// @desc    Update user account information
// @route   PUT /apiv1/account
// @access  Private
const updateUserAccount = ( async(req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            password: updatedUser.password,
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
})

module.exports = {
    addUser,
    getUserAccount,
    updateUserAccount
}
// PROJECT POWERD BY LABA CREATIVES