const mongoose = require('mongoose')


const connectTODb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Database connected succesfully..");

    }).catch(err => console.log(err));
}


module.exports = connectTODb;