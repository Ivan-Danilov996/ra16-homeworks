import { useState } from 'react'
import PostsContext from '../context/PostsContext'

export default function PostsProvider(props) {

    const [posts, setPosts] = useState(false)

    async function fetchPosts() {
        const response = await fetch('http://localhost:7777/posts')
        const data = await response.json()
        setPosts(data)
        console.log(data)
    }


    return (
        <PostsContext.Provider value={{ posts, fetchPosts }}>
            {props.children}
        </PostsContext.Provider>
    )
}