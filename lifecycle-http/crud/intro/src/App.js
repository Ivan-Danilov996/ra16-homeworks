import './App.css';
import Header from './components/Header'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import { useState } from 'react'

function App() {

  const initialState = { value: '' }

  const [state, setState] = useState(initialState)
  const [notes, setNotes] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setState(prev => ({ ...prev, value: initialState.value }))
    postNote({ id: 0, content: e.target.input.value })
      .then(status => {
        if (status === 204) {
          getNotes()
        }
      })
  }

  function deleteHandler(id) {
    deleteNote(id)
    .then(status => {
      if (status === 204) {
        getNotes()
      }
    })
  }

  function handleChange(e) {
    setState(prev => ({ ...prev, value: e.target.value }))
  }

  async function postNote(data) {
    const response = await fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    return response.status
  }

  async function deleteNote(id) {
    const response = fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE'
    })
    return response.status
  }

  function handleUpdate() {
    getNotes()
  }

  function getNotes() {
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(notes => {
        setNotes({ notes })
      })
  }

  return (
    <>
      <Header handleUpdate={handleUpdate} />
      <Notes getNotes={getNotes} state={notes} deleteHandler={deleteHandler} />
      <NewNote value={state.value} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
