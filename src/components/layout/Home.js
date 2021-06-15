import React from 'react';
import { Grid } from "@material-ui/core";
import QuestionFeed from '../question/QuestionFeed';


const Home = () => {

    return (
        <Grid container direction="row" justify='center'>
            <QuestionFeed/>
        </Grid>
    );
}
 
export default Home;