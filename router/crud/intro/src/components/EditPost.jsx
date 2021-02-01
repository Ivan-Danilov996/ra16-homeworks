import { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'

import PostsContext from '../context/PostsContext'
import Card from './Card'
import EditCard from './EditCard'

export default function EditPost({ match }) {
    const { posts } = useContext(PostsContext)
    const post = posts.find(o => o.id === parseInt(match.params.id));

    const [redirect, setRedirect] = useState(false)
    const [editCard, setEditCard] = useState(false)

    function handleEdit() {
        setEditCard(!editCard)
    }

    async function clickHandler(e, value) {
        e.preventDefault()
        const response = await fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify({
                id: post.id,
                content: value
            }),
            credentials: 'same-origin'
        })
        if (response.status === 204) {
            setRedirect(true)
        }
    }




    return (
        <>
            {redirect ? <Redirect to={'/'} /> :
                editCard ? <EditCard content={post.content} handleEdit={handleEdit} clickHandler={clickHandler} /> : <Card post={post} handleEdit={handleEdit} />
            }
        </>
    )
}