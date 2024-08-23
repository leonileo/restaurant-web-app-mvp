// PROJECT POWERD BY LABA CREATIVES
// index.js
// Import necessary modules
const express = require('express')

const port = process.env.PORT || 5000
const ENV = process.env.NODE_ENV || "development"

// initialize app
const app = express()




// start listening on port 5000

app.listen(port, () => {
    console.log(`Server started on port ${port}, in ${ENV} mode.`)
})

// PROJECT POWERD BY LABA CREATIVES