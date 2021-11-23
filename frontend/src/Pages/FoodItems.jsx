import React, {useState, useEffect} from 'react'

const FoodItems = () => {
    
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
        <form >
            <ul>
                {
                    posts.map(post => 
                    <li key={post.id}>
                        {post.name}
                        <input type="number" min="0" max="30" />
                    </li>
                    )
                }
            </ul>
            <input type="submit" value="submit" />
        </form>
        </div>
  )
}

export default FoodItems