import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/authentication/SignIn';


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>              
            <Route component={SignIn} exact path='/login'/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
