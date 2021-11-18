import React, {useState, useEffect} from 'react'

const GetItems = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/pointofsale/getitems/', {method: 'GET'},{mode: 'cors'})
        .then(res => res.json())
        .then(data => {
            setPosts(data.items)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.name}</li>)
                }
            </ul>
            
        </div>
    )
}

export default GetItems