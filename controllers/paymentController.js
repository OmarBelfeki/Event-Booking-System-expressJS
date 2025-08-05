const Ticket = require("../models/Ticket");

exports.createCheckoutSession = async (req, res) => {
    try {
        const {ticketId} = req.body;
        const ticket = await Ticket.findById(ticketId);
        ticket.paymentStatus = "paid"
        await ticket.save();

        res.json({url: session.url});
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
};