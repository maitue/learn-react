import { Routes, Route, Link} from 'react-router-dom'
import HomePage  from './pages/Home/Home.js'
import  LearnHook  from './pages/Hook/LearnHook'
import { useState } from 'react'
import './App.css';
function App() {
  // const [counter, setCounter] = useState(1);
  // const orders = [20,30,50]
  // const handleIncrease = () => {
  //   const total = orders.reduce((total, cur)=> total + cur);
  //   console.log(total)
  //   setCounter(counter + 1)
  // }
  // const [info, setInfor] = useState({
  //   name: 'Pham Thi Khanh Hien',
  //   age: 27,
  //   address: 'Hai Duong, VN'

  // })
  // const handleUpdate =() => {
  //     setInfor({
  //       ...info,//thhêm vào mảng đã có
  //       bio: "Vợ của Tuế ...."
  //     })
  // }
  // return (
  //   <div className="App">
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //     <h2> {JSON.stringify(info)}</h2>
  //     <button onClick={handleUpdate}>Update</button>
  //   </div>
  // );
  return (
    <div className="App">
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link> 
                </li>
                <li> 
                    <Link to="/LearnHook"> Learn Hook</Link> 
                </li>
            </ul> 
        </nav>

        <Routes>
            <Route path='/' element={ <HomePage/> }></Route>
            <Route path='/LearnHook' element={<LearnHook/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
