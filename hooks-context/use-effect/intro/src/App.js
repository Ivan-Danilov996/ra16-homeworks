import './App.css';
import List from './Components/List'
import Details from './Components/Details'
import {useState} from 'react'

function App() {

  const [id, setId] = useState(false)

  function clickHandler(itemId) {
    setId(itemId)
  }

  return (
    <div className="app">
      <List clickHandler={clickHandler}/>
      {id ? <Details id={id}/> : null}
    </div>

  );
}

export default App;
