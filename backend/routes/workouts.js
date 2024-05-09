const express = require('express')

const Workout = require('../models/workoutModel')

// an instance of router forest
const router = express.Router()

// get all workouts
router.get('/', (req, res)=>{
    res.json({mssg: 'Get all workouts'})
})

// get a single workout
router.get('/:id', (req, res)=>{
    res.json({mssg: 'Get a single workout'})
})

// post a new workout
router.post('/', async(req, res)=>{
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps}) // this is an asynchronous
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'post a new workout'})
})

// delete a workout
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'delete a workout'})
})

// update a workout
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'update a workout'})
})

// at the end, we need to export our router
module.exports = router