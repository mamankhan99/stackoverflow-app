import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SignedOutButtons from './SignedOutButtons';
import SignedInButtons from './SignedInButtons';

const Navbar = (props) => {
    

    const user = useSelector(
        state => state.authentication.user
    );    

    const navButtons = user ? <SignedInButtons/> : <SignedOutButtons/>;
    
    return (
        <AppBar
            position="sticky">
            <Toolbar>
                    {navButtons}
            </Toolbar>    
        </AppBar>
    );
}

  
export default Navbar;