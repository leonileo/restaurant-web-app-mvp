// PROJECT POWERD BY LABA CREATIVES
// authContorller.js
// Import necessary modules
const asyncHandler = require("../middleware/asyncHandler.js");
const User = require('../models/userModel.js');
const generateToken = require('../utils/generateToken.js');

// @desc    Auth user and get token
// @route   POST /apiv1/login
// @access  Public
const loginUser = asyncHandler( async (req, res) => { 
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if ( user && (await user.matchPassword(password)) ) {
        generateToken(res, user._id);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Logout user and clear token
// @route   POST /apiv1/auth/logout
// @access  Private
const logoutUser = asyncHandler( async (req, res) => { 
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' })
});

module.exports = {
    loginUser,
    logoutUser
}
// PROJECT POWERD BY LABA CREATIVES