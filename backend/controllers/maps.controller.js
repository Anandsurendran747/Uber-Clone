const { validationResult } = require("express-validator");
const { getAddress, calculateDistance, getSuggessions } = require("../services/maps.services");



module.exports.getAddress = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await getAddress(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: "coordinates not found" });
    }
}

module.exports.getDistance = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { source, destination } = req.query;
    try {
        const distance = await calculateDistance(source, destination);
        res.status(200).json(distance);
    } catch (error) {
        res.status(404).json({ message: "coordinates not found" });
    }
}

module.exports.getSuggessions = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { loc } = req.query;

    try {
        const suggesstions = await getSuggessions(loc);
        return res.status(200).json(suggesstions);
    } catch (error) {
        res.status(404).json({ message: "no suggessions" });
    }
}