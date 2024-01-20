//dsloggedin
export const isLoggedIn=()=>{
    let data = window.localStorage.getItem('data')
    if (data != null) {
        return true;
    }
    else{
        return false;
    }
};

//dologin
export const doLogin=(data, next)=>{
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
    next();
};

//dologout
export const doLogout = (next) =>{
    localStorage.removeItem("data");
    next();
};

//get currentUser
export const getCurrentUserDeatil=()=>{
    if (isLoggedIn) {
        return JSON.parse(localStorage.getItem("data"))?.User
    }
    else{
        return undefined;
    }
};