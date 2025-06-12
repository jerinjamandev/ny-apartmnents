import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        )
    }
    if (!user) {
        return <Navigate state={{ from: location }} to='/login' replace={true}> </Navigate>
    }
    return children
};

export default Private;