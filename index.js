var bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const functions = require('./functions')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/grids', (req, res) => {
    const x = req.body.x
    const y = req.body.y
    const data = req.body.data

    let result = functions(x, y, data)

    res.send(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))