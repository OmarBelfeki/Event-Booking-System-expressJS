const Event = require("../models/Event");
const Ticket = require("../models/Ticket");

exports.bookTickets = async (req, res) => {
    try{
        const {eventId, seats, price, userId} = req.body;
        const event = await Event.findById(eventId);
        const unavailable = seats.some(s => events.bookedSeats.includes(s));
        if(unavailable) return res.status(400).json({message: "Seats not available"});

        event.bookSeats.push(...seats);
        await event.save()

        const ticket = await Ticket.create({eventId, userId, seats, price});
        res.json(ticket);
    } catch(e) {
        res.json({error: e.message})
    }
}
