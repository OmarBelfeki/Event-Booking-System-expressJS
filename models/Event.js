const mongoose = require("mongoose");

const eventShema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    location: String,
    totalSeats: Number,
    bookedSeats: {type: [Number], default: []}
});

module.exports = mongoose.model("Event", eventShema);
