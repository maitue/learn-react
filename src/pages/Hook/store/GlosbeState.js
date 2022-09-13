import {useStore} from './index'

function GlosbeState() {
    const [state, dispatch] = useStore()
    console.log(state)
    return ( 
        <div>
            <h1>
                glosble
            </h1>
        </div>
     );
}

export default GlosbeState;