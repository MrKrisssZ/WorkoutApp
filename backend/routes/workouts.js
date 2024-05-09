const express = require('express')

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
router.post('/', (req, res)=>{
    
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