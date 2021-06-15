import { Box, Button } from '@material-ui/core';
import React from 'react';

const SignedOutButtons = () => {
    return (
        <Box>
            <Button
                href="/login">
              Login
            </Button>
            <Button
                href="/signup">
              Sign Up
            </Button>           
      </Box>
    );
}
 
export default SignedOutButtons;