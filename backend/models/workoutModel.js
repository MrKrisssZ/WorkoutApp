const mongoose = require('mongoose')

const schema = mongoose.Schema

const workoutSchema = new schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true}) // this will automatically create a property for us to say when the document was created

// build a collection of workouts and exports our model
module.exports = mongoose.model('Workout', workoutSchema)


