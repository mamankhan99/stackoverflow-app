import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.authentication.user)
    return (
        <Route {...rest} render={props => (!user || !user.token ? <Component {...props} /> :  
        <Redirect to="/" />)} />
    );                         
}

export default PublicRoute;