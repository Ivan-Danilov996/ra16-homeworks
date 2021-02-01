import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export default function EditCard({ handleEdit, clickHandler, content }) {

    const [value, setValue] = useState(content)

    function changeHandler(e) {
        setValue(e.target.value)
    }

    return (
        <div className="card">
            <Link className='close-form' onClick={handleEdit}>Х</Link>
            <form className="new-post-form">
                <input value={value} onChange={changeHandler} className='create-post-input' />
                <button onClick={(e) => clickHandler(e, value)} type='submit' className="create-post-btn">Сохранить</button>
            </form>
        </div>
    )
}