import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createHeaders } from '../../utils/methods';
import { updateProfile } from '../../redux/ducks/profile';
import { MEDIA_TYPES } from '../../utils/constants';
import { Button, Input } from '@material-ui/core';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';




const EditProfile = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(
        state => state.authentication.user,
    )
    const state = useSelector(
        state => state.profile
    );
    const { isUpdated, error } = state;

    const initialValues = {
        about: "",
        avatar: null,
    }

    const headers = createHeaders(user.token);
    
    useEffect(()=>{
        if(isUpdated)
        history.push(`/${user.username}`);
    }, [isUpdated])
    
    const onSubmit = values => {
        console.log(values);
        const data = new FormData();
        data.append('about', values.bio);
        data.append('avatar', values.avatar);
        dispatch(updateProfile(user.id, data, headers));
    }
        
    const validationSchema = Yup.object({
        about: Yup.string()
            .required('Required.'),
        avatar: Yup.mixed()
            .required('Required.')
            .test(
                'fileFormat',
                'Unsupported file type',
                (value) => value === null || (value && MEDIA_TYPES.includes(value.type))
            ),
    })
    
    const validateAbout = value => {
        if(error?.about)
            return error.about;
    }
    return (
        
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
                {props => (
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='username'>About </label>
                            <Field
                                as='textarea'
                                id='about'
                                name='about'
                                validate={validateAbout}/>
                            <ErrorMessage name = 'about'/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor='avatar'>Avatar </label>
                            <Input
                                id="avatar"
                                name="avatar"
                                type="file"
                                onChange={ event => {
                                    props.setFieldValue('avatar', event.target.files[0]);
                                }
                            }/>
                            <ErrorMessage name = 'avatar'/>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary">
                            Done
                        </Button>
                    </Form>
                )}
        </Formik>
        
    );
}

export default EditProfile;

                
                