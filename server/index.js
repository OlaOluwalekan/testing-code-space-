require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const connect_string = process.env.MONGO_URI

mongoose.connect(connect_string)

const app = express()

const testModel = mongoose.model(
    'test',
    new mongoose.Schema({
        test: String,
        num: Number
    })
)

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}))

app.get('/', (req, res) => {
    res.status(200).json({ page: "home" })
})

app.post('/server', async (req, res) => {
    console.log(req.body);
    const test = await testModel.create(req.body)
    res.status(200).json(test)
})

const port = process.env.PORT || 9000

app.listen(port, console.log(`server is listening on port ${port}...`))