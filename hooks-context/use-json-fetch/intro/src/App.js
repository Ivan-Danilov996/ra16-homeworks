import './App.css';
import GetData from './Components/GetData'
import GetError from './Components/GetError'
import GetLoading from './Components/GetLoading'

function App() {

  return (
    <>
      <GetData />
      <GetError />
      <GetLoading />
    </>
  );
}

export default App;
