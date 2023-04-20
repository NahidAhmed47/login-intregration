import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <h1 className='text-center'>Loading...</h1>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;