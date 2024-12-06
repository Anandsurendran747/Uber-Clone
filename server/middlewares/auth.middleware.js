const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const blacklistedTokenModel = require('../models/blacklistedToken.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized1" });
    }

    const isBlackListed = await blacklistedTokenModel.findOne({ token: token });

    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized2" });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}