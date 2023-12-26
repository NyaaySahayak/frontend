import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../auth/authindex'

const PrivateRoute = () => {

    if (isLoggedIn()) {
        return <Outlet/>
    }
    else{
        return <Navigate to={"/"}/>
    }
  
}

export default PrivateRoute
