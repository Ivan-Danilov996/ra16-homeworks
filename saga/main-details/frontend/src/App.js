import './App.css';
import ServiceList from './components/ServiceList'
import Service from './components/Service'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route exact path="/" component={ServiceList} />
          <Route exact path="/:id([0-9]+)" component={Service} />
      </Router>
    </Provider>
  );
}

export default App;
