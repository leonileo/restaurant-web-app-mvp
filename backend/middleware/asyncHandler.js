// PROJECT POWERD BY LABA CREATIVES
// asyncHandler.js
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

module.exports = asyncHandler;
// PROJECT POWERD BY LABA CREATIVES