// PROJECT POWERD BY LABA CREATIVES
// API ROUTE and FUNCTION
// eventRoutes.js
// Import necessary modules
const express = require('express');
const {admin} = require('../middleware/authMiddleware.js');
const {
    addEvents,
    getEvents,
    updateEvent,
    deleteEvent,
} = require('../controllers/eventController.js')

const router = express.Router();

router.route('/')
.post(admin, addEvents)
.get(getEvents);
router.route('/:id')
.put(admin, updateEvent)
.delete(admin, deleteEvent)


module.exports = router

// PROJECT POWERD BY LABA CREATIVES