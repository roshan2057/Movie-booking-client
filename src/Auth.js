import Cookies from 'js-cookie';
import React from 'react'
import { Navigate } from 'react-router-dom';

const Auth = ({children}) => {
        if(Cookies.get('token')){
            return<>{children}</>
        }
        else{
            return <Navigate to={'/login'}/>;
        }
    }
export default Auth