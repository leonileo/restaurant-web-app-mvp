// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// eventRoutes.js
// Import necessary modules
const express = require('express');
const {protect, admin} = require('../middleware/authMiddleware.js');
const {
    addEvents,
    getEvents,
    updateEvent,
    deleteEvent,
} = require('../controllers/eventController.js')

const router = express.Router();

router.route('/')
.post(protect, admin, addEvents)
.get(getEvents);
router.route('/:id')
.put(protect, admin, updateEvent)
.delete(protect, admin, deleteEvent)


module.exports = router

// PROJECT POWERD BY LABA CREATIVES