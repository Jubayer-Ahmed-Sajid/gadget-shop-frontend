import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';

const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default UseAuth;