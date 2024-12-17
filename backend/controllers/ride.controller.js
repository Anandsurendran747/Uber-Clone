const { validationResult } = require("express-validator");
const { createRide, getFare } = require("../services/ride.services");


module.exports.createRide = async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { source, destination, vehicleType } = req.body;
    try {
        const ride = await createRide({ user: req.user._id, source, destination, vehicleType });
        return res.status(201).json(ride);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports.getFare = async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    const { source, destination } = req.query;

    try {
        const fare = await getFare(source, destination);
        return res.status(200).json(fare);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}