// PROJECT POWERD BY LABA CREATIVES
// authMiddleware.js
const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler.js');
const User = require('../models/userModel.js')

// Protect routes
const protect = asyncHandler( async (req, res, next) => {
    let token;

    // Read the JWT from the cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch(error){
            res.status(401);
            throw new Error ("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error ("Not authorized, no token");
    }

} )

// Admin middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error ("Not authorized as admin");
    }
}

module.exports = { protect, admin };
// PROJECT POWERD BY LABA CREATIVES