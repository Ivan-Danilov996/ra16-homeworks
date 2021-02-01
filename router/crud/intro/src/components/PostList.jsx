import Post from './Post'
import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PostsContext from '../context/PostsContext'

export default function PostList() {

    const { posts, fetchPosts } = useContext(PostsContext)

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <>
            <Link className='new-post-btn' to="/posts/new">Создать пост</Link>
            <ul className="post-list">
                {posts ? posts.map(post => <Post key={post.id} info={post} />) : null}
            </ul>
        </>

    )
}