const { validationResult } = require("express-validator");
const { createRide, getFare } = require("../services/ride.services");
const { getCaptainsInTheRadius, getAddress } = require("../services/maps.services");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/ride.model");


module.exports.createRide = async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { source, destination, vehicleType } = req.body;
    try {
        const ride = await createRide({ user: req.user._id, source, destination, vehicleType });
        res.status(201).json(ride);

        const pickupLocaton = await getAddress(source);
        const driverInLocation = await getCaptainsInTheRadius(pickupLocaton.lat, pickupLocaton.lng, 5);

        ride.otp = "";
        const rideWithUser = await rideModel.findOne({_id:ride._id}).populate('user');
        driverInLocation.map(driver => {
            sendMessageToSocketId(driver.socketId, {
                event: 'new-ride',
                data: rideWithUser
            })

        })

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