import { createContext, useReducer } from "react";


// instead of using local states, we are using global context.
export const WorkoutContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type){
        // full array of workouts we get back from the server
        case 'SET_WORKOUT':
            return {workouts: action.payload}
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => 
                    w._id !== action.payload._id
                )
            }
        default:
            return state
    }
}


// children property represents whatever components or template that accepting props wraps. In this case, <App /> is the children
export const WorkoutsContextProvider = ({children}) => {
    // two arguments: reducer function, initial value for state object
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    // update the workout using dispatch function
    // dispatch({type: 'SET_WORKOUT', payload: [{}, {}]})


    return (
        // Wrap whatever parts of our application needs access to the context
        // since it wraps the root component, which means that it wraps all other components in our application. It means that all components will all have access to our workouts context
        // inner braket means the object
        <WorkoutContext.Provider value={{...state, dispatch}}> 

            {children}

        </WorkoutContext.Provider>


    )


}