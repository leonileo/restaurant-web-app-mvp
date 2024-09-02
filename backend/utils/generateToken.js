// PROJECT POWERD BY LABA CREATIVES
// generateToken.js
const jwt = require('jsonwebtoken')

const generateToken = (res, userId) => {
    const token = jwt.sign( { userId: userId}, process.env.JWT_SECRET, {
        expiresIn: '10d'
    });

    // Set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
}

module.exports = generateToken;

// PROJECT POWERD BY LABA CREATIVES