import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import Home from './components/home';
import Login from './components/login';
import Create from './components/create';
import Edit from './components/edit';
import Show from './components/show';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem('login');

    this.state = {
      token
    };

    if (token) {
      this.getBooks(token);
    }
  }

  getBooks(token) {
    axios.get(`http://localhost:8080/api/books?token=${token}`)
      .then((response) => {
        const { books } = response.data;
        this.setState({ books });
      }, (err) => {
        localStorage.removeItem('login');
      });
  }

  render() {
    const {
      books,
      token
    } = this.state;

    if (!token) {
      if (window.location.pathname !== '/login') {
        return window.location.pathname = '/login';
      }
    } else if (!books) {
      return <div>Loading...</div>
    }

    return (
      <Router>
        <div>
          <header>
            <div className="container">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/create">New</Link>
              </nav>
            </div>
          </header>
          <div className="container">
            <main>
              <Route
                path="/"
                render={props => <Home {...props} books={books} />}
                exact
              />
              <Route
                path="/edit/:id"
                render={props => <Edit {...props} books={books} />}
              />
              <Route
                path="/show/:id"
                render={props => <Show {...props} books={books} />}
              />
              <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />
            </main>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
