import {useEffect, useState} from 'react'
function CountDown() {
    const [countDown, setCountDown]= useState(180)
    useEffect(()=>{
       const timerId = setTimeout(()=>{
            setCountDown(prevState=>prevState-1)
        },1000)
        return () => clearInterval(timerId) 
    },[])
    return ( 
        <div>
            {countDown}
        </div>
     );
}

export default CountDown;