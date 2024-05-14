const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// get all workouts
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}) // get all object that's why this is blank

    res.status(200).json(workouts)

}

// get a single workout
const getWorkout = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await Workout.findById(id)
    if(!workout)
    {
        return res.status(400),json({error: 'No such workout'})
    }
    
    res.status(200).json(workout)
    
}

// create new workouts
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []

    if (!title)
    {
        emptyFields.push('title')
    }
    if (!load)
    {
        emptyFields.push('load')
    }
    if (!reps)
    {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0)
    {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps}) // this is an asynchronous
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // res.json({mssg: 'post a new workout'})
}

// delete a workout
const deleteWorkout = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout)
    {
        return res.status(400),json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such workout'})
    }
    // spread the properties off that body which is an object
    // because this method is asynchronous and returns a Promise. When you use await with a Promise, it tells JavaScript to pause execution of the function until the Promise resolves, ensuring that you have the complete result available before proceeding to the next line of code.
    // So, If without await, updatedWorkout may not yet contain the resolved Promise result when res.json() is called, leading to potential issues like sending incomplete data or errors not being caught properly.
    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body}, {new: true})

    if(!workout)
    {
        return res.status(400),json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}



// exports createWorkout inside the object
module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}












