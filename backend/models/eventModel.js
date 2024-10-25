// PROJECT POWERD BY LABA CREATIVES
// DATA SCHEMA
// eventModel.js
// Import necessary modules
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    startingTime: {type: String, required: true},
    endingTime: {type: String, required: true},
    date: {type: String, required: true},
    description: {type: String, required: true, unique: true},
    picture: {type: String, required: true},
}, {timestamps: true})

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
// PROJECT POWERD BY LABA CREATIVES