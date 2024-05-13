import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    // it returns the value of this context with the state the dispatch function
    const context = useContext(WorkoutContext)

    if (!context)
    {
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context
}