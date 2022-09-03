import { type } from '@testing-library/user-event/dist/type'
import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function UseEffect() {
    // 1. useEffect(calback)
    // - goi calbcak khi re-render
    // - goi calback khi 
    // 2. useEffect(callback,[])
    // -chi goi mot lan
    // callback se luon duoc goi khi component mounted
    // 3. useEffect(calbacck, [deps])
    // calbcak se duoc goi lai khi deps thay doi 

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect( () => {

        document.title = title
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res=> res.json())
            .then(posts=>{
                setPosts(posts)
            })
       
    },[type]) // them [] se chi goi mot lan

    return ( 
        <div>
            <h1>Learn UseEffect</h1>
            {tabs.map(tab=>(
                <button 
                   key={tab}
                   style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                   } : {}}
                   onClick={()=>setType(tab)}
                >{tab}</button>
            ))}
            <input onChange={e=>setTitle(e.target.value)} value={title}/>
            <ul>
                {posts.map(post=>(
                <li key={post.id}>{post.title || post.name}</li>

                ))}
            </ul>
        </div>

    );
}

export default UseEffect;