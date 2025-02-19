const userModel = require('../models/user.model')
const { validationResult } = require('express-validator')
const userService = require('../services/user.service')
const blacklistedTokenModel = require('../models/blacklistedToken.model')

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const isUserWithEmail = await userService.checkUser(email);

    if (isUserWithEmail)
        res.status(200).json({ warning: "email already registerd" })
    else {
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        })

        const token = user.generateAuthToken();

        res.status(201).json({ token, user })
    }


};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userService.checkUser(email);

    if (!user) {
        return res.status(401).json({ message: "Invalid Email or Password." });
    }


    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid Email or Password." });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);


    res.status(200).json({ token, user });


}


module.exports.getUserProfile = (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    res.clearCookie('token');

    await blacklistedTokenModel.create({ token })


    return res.status(200).json({ message: "logout successfully" })
}