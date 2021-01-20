import React from 'react'


export default class Header extends React.Component {
    render() {
        return (
            <div className="title">
                <h1 className="title-text">Notes</h1>
                <button onClick={this.props.handleUpdate} type="button" className="update">update</button>
            </div>
        )
    }
}