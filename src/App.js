import React, { useState, useEffect } from 'react';
import firebase from './Database/firebase';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginPage from './Authentication/LoginPage';
import SignupPage from './Authentication/SignupPage';
import Lists from './List/Lists';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) setCurrentUser(user)
      });
  },[])


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/lists' exact component={Lists} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
