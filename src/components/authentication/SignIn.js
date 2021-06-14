import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import * as Yup from 'yup';
import { signin } from '../../redux/ducks/authentication';

const SignIn = () => {

        
    const dispatch = useDispatch();
    const state = useSelector(state => state.authentication);
    const {error, loading} = state;

    const initialValues = {
        username: "",
        password: ""
    }
    
    const onSubmit = values => {
        dispatch(signin(values));
        console.log('Form Data', values)
    }
    
    const validationSchema = Yup.object({
        username: Yup.string().required('Username or Email is Required.'),
        password: Yup.string().required('Password is Required.'),
    })


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='username'>Username/Email</label>
                    <Field type='text' id='username' name='username'/>
                    <ErrorMessage name = 'username'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <Field type='password' id='password' name='password'/>
                    <ErrorMessage name = 'password'/>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default SignIn;