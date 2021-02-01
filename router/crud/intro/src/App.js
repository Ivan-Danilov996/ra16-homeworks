import './App.css';
import PostList from './components/PostList'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PostsProvider from './context/PostsProvider';

function App() {
  return (
    <PostsProvider>
      <Router>
        <div className="app">
          <Route exact path='/' component={PostList} />
          <Route exact path='/posts/new' component={NewPost} />
          <Route exact path='/posts/:id([0-9]+)?' component={EditPost} />
        </div>
      </Router>
    </PostsProvider>

  );
}

export default App;
