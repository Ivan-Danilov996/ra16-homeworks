import React from 'react'
import Note from './Note'


export default class Notes extends React.Component {

    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        return (
            <div className="notes">
                {this.props.state? this.props.state.notes.map(note => <Note deleteHandler={this.props.deleteHandler} key={note.id} id={note.id} content={note.content} />) : null}
            </div>
        )
    }
}