import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function NewPost() {

    const [redirect, setRedirect] = useState(false)

    const [value, setValue] = useState('')

    async function fetchData() {
        const data = {
            id: 0,
            content: value
        }
        const response = await fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'same-origin'
        })

        if (response.status === 204) {
            setRedirect(true)
        }
    }

    function clickHandler(e) {
        e.preventDefault()
        fetchData()
        setValue('')
    }

    function changeHandler(e) {
        setValue(e.target.value)
    }

    return (
        <>
            {redirect ? <Redirect to={'/'} /> :
                <div className="card">
                    <Link className='close-form' to='/'>Х</Link>
                    <form className="new-post-form">
                        <input value={value} onChange={changeHandler} className='create-post-input' />
                        <button onClick={clickHandler} type='submit' className="create-post-btn">Опубликовать</button>
                    </form>
                </div>

            }
        </>

    )
}