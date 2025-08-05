const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
    try{
        const event = await Event.create(req.body);
        res.json(event);
    }catch(e){
        res.status(500).json({message: e.message})
    }
};

exports.getEvents = async (req, res) => {
    const events = await Event.find();
    res.json(events);
}

exports.getEventById = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
}
