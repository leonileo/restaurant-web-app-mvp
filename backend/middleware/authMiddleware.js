// PROJECT POWERD BY LABA CREATIVES
// authMiddleware.js
const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler.js");
const User = require("../models/userModel.js");


// Admin middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error ("Not authorized as admin");
    }
}

module.exports = { admin };
// PROJECT POWERD BY LABA CREATIVES