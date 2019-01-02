import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import User from './components/user';
import Users from './components/users';
import Contact from './components/contact';
import Notfound from './components/notfound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="menu">
            <ul>
              <li> <Link to="/r1">User</Link> </li>
              <li> <Link to="/r2">Contact</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={User} />
            <Route path="/user/:id" component={Users} />
            <Route path="/r1" component={User} />
            <Route path="/r2" component={Contact} />
            <Redirect to="/" />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
