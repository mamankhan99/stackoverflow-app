import React from 'react';
import { Grid } from "@material-ui/core";
import { Typography } from '@material-ui/core';


const Home = () => {

    return (
        <Grid container direction="row" justify='center'>
             <Typography variant="body2" color="textSecondary" align="center">
                Stackoverflow
            </Typography>
        </Grid>
    );
}
 
export default Home;