import './App.css';
import Header from './components/header/Header'
import SearchBar from './components/search/SearchBar'
import Banner from './components/Banner'
import Wigets from './components/Wigets/Wigets'

function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <Banner />
      <Wigets />
    </div>
  );
}

export default App;
