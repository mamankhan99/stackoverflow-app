import React from 'react';
import { Switch } from 'react-router';
import { Box } from "@material-ui/core";
import PrivateRoute from './PrivateRoute';
import Navbar from '../layout/Navbar';
import Home from '../layout/Home';

const PrivateContent = (props) => {
    return (
        <Box>
          <Navbar/>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
          </Switch>
        </Box>
    );
}
 
export default PrivateContent;