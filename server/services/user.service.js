const userModel = require('../models/user.model');


module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required')
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}

module.exports.checkUser = async (email) => {

    const user = await userModel.findOne({ email }).select('+password')

    if (user)
        return user
    else
        false

}