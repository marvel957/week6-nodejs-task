const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .post('/', controller.bookFlight)
    .get('/', controller.getAllFlights)
    .get("/:id",controller.getFlight)
    .put("/:id",controller.editFlight)
    .delete("/:id", controller.deleteFlight);

module.exports = router;

