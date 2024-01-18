const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}))

app.get('/', (req, res) => {
    res.status(200).json({ page: "home" })
})

app.get('/server', (req, res) => {
    res.status(200).json({ page: server })
})

const port = process.env.PORT || 9000

app.listen(port, console.log(`server is listening on port ${port}...`))