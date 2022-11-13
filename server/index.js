const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const response = "Hello World"

app.use(cors())

app.get("/", (req, res) => {
    res.send(response)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
