import { useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import './App.css';

import { nanoid } from 'nanoid';

import StepModel from './models/StepModel'

function App() {

  const initialForm = {
    date: '',
    distance: ''
  }

  const [form, setForm] = useState(initialForm)
  const [steps, setSteps] = useState([])

  const handlerChange = ({ target }) => {
    const name = target.name
    setForm(prevState => ({ ...prevState, [name]: target.value }))
  }

  const sumbitHandler = (e) => {
    e.preventDefault()
    let count = false

    const step = new StepModel(nanoid(), e.target.date.value, e.target.distance.value)

    const newSteps = steps.map((st) => {
      if (st.date === step.date) {
        count = !count
        return Object.assign({}, st, { distance: parseInt(st.distance) + parseInt(step.distance) })
      }
      return st
    })

    setSteps(newSteps)

    if (!count) {
      setSteps(prevSteps => [...prevSteps, step]);
    }

    setForm(initialForm)
  }

  const deleteStep = (id) => {
    setSteps(prevSteps => prevSteps.filter(step => step.id !== id))
  }

  const editStep = (id) => {
    setSteps(prevSteps => prevSteps.filter(step => step.id !== id))
    steps.forEach(step => {
      if (step.id === id) {
        setForm(prevState => ({ ...prevState, date: step.date, distance: step.distance }))
      }
    })

  }


  return (
    <div className="container">
      <Header sumbitHandler={sumbitHandler} handlerChange={handlerChange} form={form} />
      <Table steps={steps} deleteStep={deleteStep} editStep={editStep} />
    </div>
  );
}

export default App;
