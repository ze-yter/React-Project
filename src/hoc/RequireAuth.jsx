import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
    const {isAuth, email, token, id} = useAuth();
    const location = useLocation();

    console.log(isAuth, email)

    if (!isAuth) {
        return <Navigate to="/login" state={{from : location}}/>;
    }
    return children;
}
