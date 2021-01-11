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
    const step = new StepModel(nanoid(), form.date, form.distance)
    setSteps(prevSteps => [...prevSteps, step]);
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
