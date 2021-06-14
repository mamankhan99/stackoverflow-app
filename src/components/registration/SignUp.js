import React from 'react';
import { signup } from '../../redux/ducks/registration';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';


const SignUp = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.registration);
    const {error, loading} = state
    
    const initialValues = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
    }

    const onSubmit = values => {
        dispatch(signup(values));
        console.log('Form Data', values)
    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .required('Required.'),
        password: Yup.string()
            .required('Required.'),
        first_name: Yup.string()
            .required('Required.'),
        last_name: Yup.string()
            .required('Required.'),
        email: Yup.string()
            .required('Required.')
            .email('Invalid email format'),
    })

    const validateUsername = value => {
        if(error?.username)
            return error.username;
    }
    const validateEmail = value => {
        if(error?.email)
            return error.email;
    }
    const validateFirstName = value => {
        if(error?.first_name)
            return error.first_name;
    }
    const validatePassword = value => {
        if(error?.password)
            return error.password;
    }
    const validateLastName = value => {
        if(error?.last_name)
            return error.last_name;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='username'>Username</label>
                    <Field
                        type='text'
                        id='username'
                        name='username'
                        validate={validateUsername}/>
                    <ErrorMessage name = 'username'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field
                        type='text'
                        id='email'
                        name='email'
                        validate={validateEmail}/>
                    <ErrorMessage name = 'email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='first_name'>First Name</label>
                    <Field
                        type='text'
                        id='first_name'
                        name='first_name'
                        validate={validateFirstName}/>
                    <ErrorMessage name = 'first_name'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='last_name'>Last Name</label>
                    <Field
                        type='text'
                        id='last_name'
                        name='last_name'
                        validate={validateLastName}/>
                    <ErrorMessage name = 'last_name'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <Field
                        type='password'
                        id='password'
                        name='password'
                        validate={validatePassword}/>
                    <ErrorMessage name = 'password'/>
                </div>
                
                <button type='submit' disabled={loading}>Submit</button>
            </Form>
        </Formik>        
    );
}

export default SignUp;