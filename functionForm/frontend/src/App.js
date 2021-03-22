import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './fun_comp/Home'
import User from './fun_comp/User'
import Signup from './fun_comp/signup';
import Login from './fun_comp/login'
import Navbar from './fun_comp/Navbar'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/User' component={User} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
