import React, { createContext, useContext, useReducer} from "react"

// prepares the datalayer
export const StateContext = createContext()

// Wrap our app and provide the data to all components
export const StateProvider = ({reducer, 
initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull inforamtion from the data layer
export const useStateValue = () => useContext(StateContext)