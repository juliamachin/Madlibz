const express = require('express')
// require cors to access server from different domains
const cors = require('cors')
// mainly installed for post
const bodyParser = require('body-parser')

// set up server by calling express
const app = express()
// accepting data in json format so we can process it
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

// set up port to run server on
const port = 4000
const server = app.listen(port, () => {
    // to confirm that the server is running
    console.log(`Server running on port ${port}"`)
})
