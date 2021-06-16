import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/ducks/authentication';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
const SignedInButtons = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = useSelector(
        state => state.authentication.user
    );
    
    const logout = () => {
        dispatch(signout())
    }

    return (
        <Box className={classes.root}>
          
            <Button
                variant="contained"
                color="primary"
                href="/">
              Home
            </Button>
            <Button
                variant="contained"
                color="primary"
                href={`/${user.username}`}>
              Profile
            </Button>
            <Button
                variant="contained"
                color="primary"
                href="/add_question">
              Add Question
            </Button>
            <Button
                 variant="contained"
                 color="primary"
                 onClick={logout}>
                Logout
            </Button>
      </Box>
    );
}
 
export default SignedInButtons;