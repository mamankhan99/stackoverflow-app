import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/authentication/SignIn';
import PublicRoute from './components/routes/PublicRoute';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import SignUp from './components/registration/SignUp';

const theme = createMuiTheme({
  mixins:{
    toolbar:{
      height: 54,
    }
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
            <Switch>              
              <PublicRoute component={SignIn} exact path='/login'/>
              <PublicRoute component={SignUp} exact path='/signup'/>
            </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
