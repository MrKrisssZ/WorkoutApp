// this is the method that attach those environment variables for us to process object
require('dotenv').config()

// get the express package
const express = require('express')
const workoutRoutes = require('./routes/workouts')


// start up the express app which is running in a node.js environment and a framwork for node that let us create apis
const app = express()

// routes
// this is technically a middleware
// app.get('/', (req, res)=> {
//     res.json({mssg: 'Welcome to the app'})
// })

// middleware is a fancy name for any code that executes between us getting a request on the server and us sending a response
// global middleware. next means that we have to run at the end of this middleware in order to move on to the next middleware
// To access request and send data to database. Any requests that comes in it looks if it has some body to the request so some data that we are sending to the server, if it does then it passes it and attaches it to the request object so that we can access it in the request handler
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// when we fire a request to this routes, then I want to use the workoutRoutes which is added to the end of /workouts
app.use('/api/workouts', workoutRoutes)


// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})

