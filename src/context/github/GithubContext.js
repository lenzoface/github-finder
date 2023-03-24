import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    // // Clear users from state
    // const clearUsers = () => dispatch({type: 'CLEAR_USERS'}) 

//     // Set loading
// const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GithubContext.Provider value={{
        // users: state.users, 
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        ...state,
        dispatch,
        }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext