import { Redirect } from 'react-router-dom'
import { useState } from 'react'

export default function Card({ post, handleEdit }) {

    const [redirect, setRedirect] = useState(false)

    async function handleDelete(id) {
        const response = await fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE'
        })
        if (response.status === 204) {
            setRedirect(true)
        }
    }

    return (
        <>
            {redirect ? <Redirect to='/' /> :
                <div className="post" >
                    <header className="header-post">
                        <div className="image">
                        </div>
                        <div className="info">
                            <div className="name">Иван Иванович</div>
                            <div className="created">{new Date(parseInt(post.created, 10)).toLocaleString()}</div>
                        </div>
                    </header>
                    <section className="content">
                        {post.content}
                    </section>
                    <footer className="footer-post">
                        <button onClick={handleEdit} className="edit-btn">Изменить</button>
                        <button onClick={() => handleDelete(post.id)} className="delete-btn">Удалить</button>
                    </footer>
                </div>
            }
        </>
    )
} 