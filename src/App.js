import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {Routers} from './router/Routers'
import './App.css';
export default function App() {
return (
    <BrowserRouter>
        <Routers/>
    </BrowserRouter>
);
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
  //const [show,setShow] = useState(false)
//   return (
//     <div className="App">
//         <nav>
//             <ul>
//                 <li> 
//                     <Link to="/">Home</Link> 
//                 </li>
//                 <li> 
//                     <Link to="/LearnHook"> Learn Hook</Link> 
//                 </li>
//                 <li>
//                     <Link to="/UseEffect">UseEffect</Link>
//                 </li>
//                 <li>
//                     <Link to="/CountDown">CountDown</Link>
//                 </li>
//                 <li>
//                     <Link to="/PageViewAvatar">PageViewAvatar</Link>
//                 </li>
//                 <li>
//                     <Link to="/FakeChatApp">FakeChatApp</Link>
//                 </li>
//                 <li>
//                     <Link to="/UseReducer">UseReducer</Link>
//                 </li>
//                 <li>
//                     <Link to="/TodoUseReducer">TodoUseReducer</Link>
//                 </li>
//                 <li>
//                     <Link to="/UseContext">UseContext</Link>
//                 </li>
//                 <li> 
//                     <Link to="/glosbeState">glosbeState</Link>
//                 </li>
//                 <li>
//                     <Link to="/Register">register</Link>
//                 </li>
//             </ul> 
//         </nav>
//         <button onClick={()=>setShow(!show)}>Toggle</button>
//         {show && <Content />}
//         <Routes>
//             <Route path='/' element={ <HomePage/> }></Route>
//             <Route path='/LearnHook' element={<LearnHook/>}></Route>
//             <Route path='/UseEffect' element={<UseEffect/>}></Route>
//             <Route path='/CountDown' element={<CountDown/>}></Route>
//             <Route path='/PageViewAvatar' element={<PageViewAvatar />}></Route>
//             <Route path='/FakeChatApp' element={<FakeChatApp />}>FakeChatApp</Route>
//             <Route path='/UseReducer' element={<UseReducer />}>UseReducer</Route>
//             <Route path='/TodoUseReducer' element={<TodoUseReducer />}>TodoUseReducer</Route>
//             <Route path='/UseContext' element={<UseContext />}>UseContext</Route>
//             <Route path='/glosbeState' element={ <Provider><GlosbeState /></Provider> }>glosbeState</Route>
//             <Route path="/register" element={<Register />}></Route>
//         </Routes>
//     </div>
//   );
}

