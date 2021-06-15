import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/ducks/authentication';

const SignedInButtons = () => {

    const dispatch = useDispatch();

    const user = useSelector(
        state => state.authentication.user
    );
    
    const logout = () => {
        dispatch(signout())
    }

    return (
        <Box display="flex" flexGrow={1} justifyContent="flex-end" alignItems="center">
            <IconButton
                onClick={logout}>
                Logout
            </IconButton>
      </Box>
    );
}
 
export default SignedInButtons;