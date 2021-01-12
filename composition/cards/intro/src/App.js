import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        button="Go somewhere"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/BMW_Isetta_-_Flickr_-_mick_-_Lumix.jpg/1200px-BMW_Isetta_-_Flickr_-_mick_-_Lumix.jpg" className="card-img-top" alt="..."></img>
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
        button="Go somewhere"></Card>
    </React.Fragment>
  );
}

export default App;
