import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()

    //update local state
    // const [workouts, setWorkouts] = useState(null)
    // we shouldn't use async function outside like in useEffect layer.
    useEffect(() => {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts') // fetch all workouts
            const json = await response.json() // array of objects where each object represents a workout

            if (response.ok)
            {
                dispatch({type: 'SET_WORKOUT', payload: json})
                // setWorkouts(json)
            }

        }

        fetchWorkouts()

    }, [dispatch]) // empty array means it will only fire once when the component first renders

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} /> // properties inside this component and cycle through the workouts
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home
