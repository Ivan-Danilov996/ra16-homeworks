import React from 'react'


export default function Card(props) {
    return (
        <div className="card">
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="google.com" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}