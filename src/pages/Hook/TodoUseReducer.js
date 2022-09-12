import { useRef } from "react"
import { useReducer } from "react"
import reduce, { initState } from './Todo/reducer'
import { setJob, addJob, deleteJob } from './Todo/actions'
import logger  from './logger'
//1. init state
/*const initState = {
    job: '',
    jobs: []
}
// 2. Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
const reduce = (state, action) => {
    let newState
    switch (action.type) { 
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action.')
    }
    return newState
}
*/
function TodoUseReducer() {
    const [state, dispatch] = useReducer(logger(reduce), initState)
    const inputRef = useRef()
    const { job, jobs} = state
    const hendleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (  
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo....."
                onChange={e => {
                    //e.target.value
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={hendleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoUseReducer;