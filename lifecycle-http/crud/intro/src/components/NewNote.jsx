import React from 'react'


export default class NewNote extends React.Component {



    render() {
        return (
            <div className="new-note">
                <form className="form" onSubmit={e => this.props.handleSubmit(e)}>
                    <div className="field">
                        <label htmlFor="input" className="form-title">New Note</label>
                        <textarea
                            value={this.props.value}
                            onChange={(e) => this.props.handleChange(e)}
                            name="input"
                            id="input"
                            cols="30"
                            rows="10"
                            required>
                        </textarea>
                    </div>
                    <button className="enter" type="submit">add</button>
                </form>
            </div>
        )
    }
}