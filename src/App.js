import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Protected from './Protected';
import Unprotected from './Unprotected';
import Home from './Home';
import GuardedRoute from './GuardedRoute';

function App() {
  const[isAutheticated, setisAutheticated] = useState(false);

  function login(){
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated)
  }

  function logout(){
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated)
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>
              Link to Home Page
          </Link>
          </li>
          <li>
            <Link to='/protected'>
              Link to Protected Page
          </Link>
          </li>
          <li>
            <Link to='/unprotected'>
              Link to Unprotected Page
          </Link>
          </li>
        </ul>
        <button onClick={login}>Login</button>
        <br/>
        <button onClick={logout}>Logout</button>
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <GuardedRoute path='/protected' component={Protected} auth={isAutheticated} />
        <Route path='/unprotected' component={Unprotected} />
      </Switch>
    </Router>

  );
}

export default App;
