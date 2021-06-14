import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/authentication/SignIn';
import PublicRoute from './components/routes/PublicRoute';


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>              
            <PublicRoute component={SignIn} exact path='/login'/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
