const WorkoutDetails = ({workout}) => {
    
    // createdAt is the automatic time stamp created by mongodb on mongoose
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps (kg): </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p> 
        </div>
    )
}

export default WorkoutDetails