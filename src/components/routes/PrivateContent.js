import React from 'react';
import { Switch } from 'react-router';
import { Box } from "@material-ui/core";
import PrivateRoute from './PrivateRoute';
import Navbar from '../layout/Navbar';
import Home from '../layout/Home';
import Profile from '../profile/Profile';
import EditProfile from '../profile/EditProfile';
import AddQuestion from '../question/AddQuestion';

const PrivateContent = (props) => {
    return (
        <Box>
          <Navbar/>
          <Switch>
            <PrivateRoute exact path="/add_question" component={AddQuestion}/>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute exact path="/edit_profile" component={EditProfile}/>
            <PrivateRoute exact path="/:slug" component={Profile}/>
          </Switch>
        </Box>
    );
}
 
export default PrivateContent;