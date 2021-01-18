import React from 'react'
import moment from 'moment-timezone'

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.hour = parseInt(props.clock.timeZone.substr(1,2));
        this.min = parseInt(props.clock.timeZone.substr(4,2));
    }

    getTime() {
        console.log(moment().tz("Europe/London").format('hh mm ss'))
    }

    state = {
        styleHour: {transform: `rotate(${(parseInt(moment().tz("Europe/London").format('hh')) + this.hour) * 30 }deg)`},
        styleMin: {transform: `rotate(${(parseInt(moment().tz("Europe/London").format('mm')) + this.min) * 6}deg)`},
        styleSec: {transform: `rotate(${parseInt(moment().tz("Europe/London").format('ss')) * 6}deg)`}
    }

    componentDidMount() {
        this.intervalId = setInterval(()=> {
            this.setState(prevState => ({...prevState, 
                styleSec: {transform: `rotate(${parseInt(moment().tz("Europe/London").format('ss')) * 6}deg)`},
                styleMin: {transform: `rotate(${(parseInt(moment().tz("Europe/London").format('mm')) + this.min) * 6}deg)`},
                styleHour: {transform: `rotate(${(parseInt(moment().tz("Europe/London").format('hh')) + this.hour) * 30 }deg)`}
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
      }

    render() {
        return (
            <div className="clock">
                <div className="title">{this.props.clock.name}</div>
                <div className="circle">
                    <button type="button" onClick={() => this.props.handleClick(this.props.clock.id)} className="remove">x</button>
                    <div style={this.state.styleHour} className="hour"></div>
                    <div style={this.state.styleMin} className="min"></div>
                    <div style={this.state.styleSec} className="sec"></div>
                </div>
            </div>
        )
    }
}