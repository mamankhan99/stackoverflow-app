import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignIn = () => {

    const initialValues = {
        username: "",
        password: ""
    }
    
    const onSubmit = values => {
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
                    <Field type='text' id='password' name='password'/>
                    <ErrorMessage name = 'password'/>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default SignIn;