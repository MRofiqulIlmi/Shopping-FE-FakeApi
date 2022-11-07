import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoute() {

    
    let loginStatusParent = localStorage.getItem('userToken');
    if(!loginStatusParent){
        return(<Navigate to="/login" replace/>)
    }
        return <Outlet/>
    
    
}

export default ProtectedRoute;