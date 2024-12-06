const captainModel = require('../models/captain.model')
const { validationResult } = require('express-validator')
const captianService = require('../services/captain.service')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    const isCaptainWithEmail = await captianService.checkCaptain(email);

    if (isCaptainWithEmail) {
        return res.status(400).json({ message: "Email already registerd" })
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captianService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType

    })
    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
}