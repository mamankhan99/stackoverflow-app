import React, { useEffect } from 'react';
import { addQuestion } from '../../redux/ducks/question';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { getTags } from '../../redux/ducks/tag';
import { createHeaders } from '../../utils/methods';
import { useHistory } from 'react-router';


const AddQuestion = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const state = useSelector(state => state.question);
    
    const tags_state = useSelector(
        state => state.tag
    );
    const question_state = useSelector(
        state => state.question
    );

    const { tags } = tags_state;
    const { isAdded } = question_state;
    
    useEffect(() => {
        dispatch(getTags());
    }, [])
    
    useEffect(() => {
        if(isAdded)
            history.push('/');
    }, [isAdded])

    const {error, loading} = state
    
    const initialValues = {
        name: "",
        body: "",
        added_tags: ""
    }

    const user = useSelector(
        state => state.authentication.user
    );
    
    const headers = createHeaders(user.token);
    
    const onSubmit = values => {
        console.log('éfdvsd');
        values = {
            ...values,
            added_tags : values.added_tags.join()
        }
        dispatch(addQuestion(values, headers));
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Required.'),
        body: Yup.string()
            .required('Required.'),
        added_tags: Yup.array()
            .required('Required.'),
    })

    const validateTitle = value => {
        if(error?.title)
            return error.title;
    }
    const validateBody = value => {
        if(error?.body)
            return error.body;
    }
    const validateTags = value => {
        if(error?.tags)
            return error.tags;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='username'>Title</label>
                    <Field
                        type='text'
                        id='title'
                        name='title'
                        validate={validateTitle}/>
                    <ErrorMessage name = 'title'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Body</label>
                    <Field
                        as='textarea'
                        id='body'
                        name='body'
                        validate={validateBody}/>
                    <ErrorMessage name = 'body'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='added_tags'>Tags</label>
                    <Field
                        as='select'
                        multiple={true}
                        id='added_tags'
                        name='added_tags'
                        validate={validateTags}>
                            {tags.map(tag => {
                                return(
                                    <option
                                        key={tag.id}
                                        value={tag.name}>
                                            {tag.name}
                                    </option>
                                )
                            })}
                    </Field>
                    <ErrorMessage name = 'added_tags'/>
                </div>
                
                <button type='submit' disabled={loading}>Submit</button>
            </Form>
        </Formik>        
    );
}

export default AddQuestion;