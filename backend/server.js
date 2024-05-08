// this is the method that attach those environment variables for us to process object
require('dotenv').config()

const express = require('express')

const app = express()

// routes
// this is technically a middleware
app.get('/', (req, res)=> {
    res.json({mssg: 'Welcome to the app'})
})

// middleware is a fancy name for any code that executes between us getting a request on the server and us sending a response
// global middleware. next means that we have to run at the end of this middleware in order to move on to the next middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})

