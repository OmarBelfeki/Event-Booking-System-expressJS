const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: "Event"},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    seats: [Number],
    price: Number,
    paymentStatus: {type: String, default: "pending"}
});

module.exports = mongoose.model("Ticket", ticketSchema);
