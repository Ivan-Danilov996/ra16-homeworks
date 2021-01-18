import React from 'react'

export default class Form extends React.Component {

    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit.bind(this)}>
                <div className="field">
                    <label htmlFor="name">Название</label>
                    <input type="text" name="name" id="name" value={this.props.state.name} onChange={this.props.handleChange.bind(this)} required/>
                </div>
                <div className="field">
                    <label htmlFor="time-zone">Временная зона</label>
                    <input type="text" name="timeZone" id="time-zone" value={this.props.state.timeZone} onChange={this.props.handleChange.bind(this)} placeholder="+00:00" maxLength='6' minLength='6' required/>
                </div>
                <div className="field">
                    <button type="submit">Добавить</button>
                </div>
            </form>
        )
    }
}