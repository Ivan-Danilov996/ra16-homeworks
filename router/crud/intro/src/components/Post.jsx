import { Redirect } from 'react-router-dom'
import { useState } from 'react'

export default function Post({ info }) {

    const initialState = {
        redirect: false,
        id: null
    }

    const [state, setState] = useState(initialState)

    function handleClickPost(id) {
        setState(prevState => ({...prevState, redirect: true, id: id}))
    }

    return (
        <>
            { state.redirect ? <Redirect to={`/posts/${state.id}`} /> :
                <li className="post" onClick={() => handleClickPost(info.id)} >
                    <header className="header-post">
                        <div className="image">
                        </div>
                        <div className="info">
                            <div className="name">Иван Иванович</div>
                            <div className="created">{new Date(parseInt(info.created, 10)).toLocaleString()}</div>
                        </div>
                    </header>
                    <section className="content">
                        {info.content}
                    </section>
                </li>}
        </>
    )
}