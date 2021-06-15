import React from 'react';
import { Link }from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardHeader, CardActions, Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

export default function QuestionCard({question}) {
  
  const date = new Date(question.date_created).toString();
  
  return (
    <Grid
      item
      container>
      <Card>
        <CardHeader
            title={question.title}/>
        <CardContent>
            <Box>
                {`score ${question.score}`}
            </Box>
            <Box>
                {`votes ${question.votes}`}
            </Box>
            <Box>
                {`answer ${question.answers.length}`}
            </Box>
            
            <Box>
                {`tags: ${question.tags.map(
                    tag => tag.name
                )}`}
            </Box>

            <Box>
                {date}
            </Box>
        </CardContent>
        <CardActions>
                <Button 
                    size="small"
                    variant='outlined'
                    color='primary'>
                        View Detail
                </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
