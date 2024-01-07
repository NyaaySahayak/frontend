import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn , getCurrentUserDeatil} from '../auth/authindex'

const AdminPrivateRoute = () => {

    if (isLoggedIn()) {
        if (getCurrentUserDeatil().role === "admin") {
            return <Outlet />
        }
        
        else{
            return <Navigate to={"/pagenotfound"} />
        }
    }
    else {
        return <Navigate to={"/"} />
    }

}

export default AdminPrivateRoute;
