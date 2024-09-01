// PROJECT POWERD BY LABA CREATIVES
// eventController.js
// Import necessary modules
const asyncHandler = require("../middleware/asyncHandler.js")
const Event = require('../models/eventModel.js')

// @desc    Register event
// @route   POST /apiv1/event
// @access  Private
const addEvents = asyncHandler( async(req, res) => {
    const {name, starting_time, ending_time, date, description, picture} = req.body;

    const event = new Event({
        // user: req.user._id,
        name: name,
        starting_time: starting_time,
        ending_time: ending_time,
        date: date,
        description: description,
        picture: picture,
    })

    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
})

// @desc    Return all events
// @route   GET /apiv1/event
// @access  Public
const getEvents =  asyncHandler( async(req, res) => {
    const events = await Event.find({}).sort({$natural: -1});

    res.status(200).json(events);
})

// @desc    Update event
// @route   PUT /apiv1/event/:id
// @access  Private
const updateEvent = asyncHandler( async(req, res) => {
    const {name, starting_time, ending_time, date, description, picture} = req.body;

    const event = await Event.findById(req.params.id);

    if (event) {
        event.name = name;
        event.starting_time = starting_time;
        event.ending_time = ending_time;
        event.date = date;
        event.description = description;
        event.picture = picture;

        const updatedEvent = await event.save();
        res.json(updatedEvent);
    } else {
        res.status(404);
        throw new Error('Event not found');
    }

})

// @desc    Delete an event
// @route   DELETE /apiv1/event/:id
// @access  Private
const deleteEvent = asyncHandler(async(req, res) => {
    const event = await Event.findById(req.params.id);

    if (event) {
        await event.deleteOne({_id: event._id});
        res.status(200).json({
            message: "Event deleted sucessfully!"
        })
    }
})

module.exports = {
    addEvents,
    getEvents,
    updateEvent,
    deleteEvent
}
// PROJECT POWERD BY LABA CREATIVES