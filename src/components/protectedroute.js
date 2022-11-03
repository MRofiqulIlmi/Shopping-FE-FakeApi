import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoute() {
    console.log("localStorage.getItem('userLogin')");
    console.log(localStorage.getItem('userLogin'));
    
    let loginStatusParent = localStorage.getItem('userToken');
    // console.log("loginStatusParent PR");
    // console.log(loginStatusParent);
    if(!loginStatusParent){
        // return(<h1>LOGIN</h1>)
        // return(loginPage);
        return(<Navigate to="/login" replace/>)
    }
        // return (children);
        // return (<Navigate to="/product" replace/>)
        return <Outlet/>
        // return children?children:<Outlet />
    
    
}

export default ProtectedRoute;