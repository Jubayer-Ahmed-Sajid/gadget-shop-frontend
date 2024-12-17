import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Loading from '../../pages/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = UseAuth()
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
        <Navigate to="/" state={{ from: location }} replace />
    );
};

export default PrivateRoutes;