import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(1);
  const orders = [20,30,50]
  const handleIncrease = () => {
    const total = orders.reduce((total, cur)=> total + cur);
    console.log(total)
    setCounter(counter + 1)
  }
  const [info, setInfor] = useState({
    name: 'Pham Thi Khanh Hien',
    age: 27,
    address: 'Hai Duong, VN'

  })
  const handleUpdate =() => {
      setInfor({
        ...info,//thhêm vào mảng đã có
        bio: "Vợ của Tuế ...."
      })
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h2> {JSON.stringify(info)}</h2>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
