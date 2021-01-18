import './App.css';
import Form from './components/Form'
import { useState } from 'react'
import ClockModel from './Models/ClockModel'
import Clock from './components/Clock'
import { nanoid } from 'nanoid';


function App() {

  const initialState = {
    name: '',
    timeZone: ''
  }
  const [clocks, setClocks] = useState([])
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setState(initialState)
    const clock = new ClockModel(nanoid(), e.target.name.value, e.target.timeZone.value)
    setClocks(prevClocks => [...prevClocks, clock])
  }

  const handleClick = (id) => {
    setClocks(prevClocks => prevClocks.filter(clock => clock.id !==id))
  }

  return (
    <>
      <Form state={state} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="clocks">
        {clocks.map((clock) => <Clock key={clock.id} clock={clock} handleClick={handleClick}/>)}
      </div>
    </>
  );
}

export default App;
