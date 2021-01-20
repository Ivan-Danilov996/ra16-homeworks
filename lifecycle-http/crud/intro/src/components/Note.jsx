import React from 'react'


export default class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <button onClick={() => this.props.deleteHandler(this.props.id)} type="button" className="remove">x</button>
                <div className="note-text">
                    {this.props.content}
                </div>
            </div>
        )
    }
}