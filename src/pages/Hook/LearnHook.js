import { useState } from 'react'

function LearnHook() {
    const [counter, setCounter] = useState(2);
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    //voi object
    const [info,setInfo] = useState({
        name: 'Mai Văn Tuế',
        age: 18,
        address: 'Nam Định'
    })
    const handleInfo = () => {
    setInfo({
        ...info,
        bio: 'Ga mo'
    })

    }
    return ( 
        <div>
            <h1>
                Page Learn Hook
            </h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <h3>{JSON.stringify(info)}</h3>
            <button onClick={handleInfo}> Update</button>
        </div>
    );
}

export default LearnHook;