const express = require("express");
const router = express.Router();
const { bookTickets } = require("../controllers/ticketController");

router.post("/", bookTickets);

module.exports = router;
