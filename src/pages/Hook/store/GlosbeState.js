import {useStore, actions} from './index'
function GlosbeState() {
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
    const hendleAdd =()=> {
        dispatch(actions.addTodo(todoInput))
    }
    return ( 
        <div>
            <input 
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e=>{
                    dispatch(actions.setTodoInput(e.target.value)
                    )
                }}
            />
            <button onClick={hendleAdd}>Add</button>
               {todos && todos.map((todo, index)=>(
                <li key={index}>{todo}</li>
               ))}
        </div>
     );
}

export default GlosbeState;