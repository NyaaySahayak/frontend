import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn , getCurrentUserDeatil } from '../auth/authindex'

const AdvocatePrivateRoute = () => {

    if (isLoggedIn()) {
        if (getCurrentUserDeatil().role === "advocate") {
            return <Outlet />
        }
        else {
            return <Navigate to={"/pagenotfound"} />
        }
    }
    else {
        return <Navigate to={"/"} />
    }

}

export default AdvocatePrivateRoute;
