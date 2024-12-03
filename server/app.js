const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express()
const cors = require('cors')
const connectTODb = require('./db/db')
const userRouter = require('./routes/user.routes')


connectTODb();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/users', userRouter)


app.get('/', (req, res) => {
    res.send('Haiii')
})



module.exports = app;