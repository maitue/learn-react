import { useState } from 'react'

function LearnHook() {
    const [counter, setCounter] = useState(2);
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    return ( 
        <div>
            <h1>
                Page Learn Hook
            </h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default LearnHook;