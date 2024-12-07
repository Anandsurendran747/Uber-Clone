const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const cors = require('cors')
const connectTODb = require('./db/db')
const userRouter = require('./routes/user.routes')
const captianRouter = require('./routes/captain.routes');

connectTODb();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use('/users', userRouter)
app.use('/captain',captianRouter)


app.get('/', (req, res) => {
    res.send('Haiii')
})



module.exports = app;