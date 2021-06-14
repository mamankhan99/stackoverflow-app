import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/authentication/SignIn';
import PublicRoute from './components/routes/PublicRoute';
import {ThemeProvider} from '@material-ui/core';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
            <Switch>              
              <PublicRoute component={SignIn} exact path='/login'/>
            </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
