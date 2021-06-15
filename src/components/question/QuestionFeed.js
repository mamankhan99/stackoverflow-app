import React, { useEffect } from 'react';
import { Grid, Typography } from "@material-ui/core";
import QuestionCard from './QuestionCard';
import { useDispatch, useSelector } from 'react-redux';
import { createHeaders } from '../../utils/methods';
import { getQuestions } from '../../redux/ducks/home';


const QuestionFeed = () => {
        
    const dispatch = useDispatch();

    const user = useSelector(
        state => state.authentication.user
    );
    
    const state = useSelector(
        state => state.home
    );

    const { questions } = state;
    
    const headers = createHeaders(user.token);
    
    useEffect(() => {
        dispatch(getQuestions(headers));
    }, [])

    const questionList = questions.length ?
        questions.map(
            question => <QuestionCard key = {question.id} question = {question}></QuestionCard>
        ) : 
        <Typography
            variant='inherit'
            component='div'>
            Sorry... No question available
        </Typography>;
    
    return (
        <Grid container direction='column'>
            {questionList}
        </Grid>
    );
}
 
export default QuestionFeed;