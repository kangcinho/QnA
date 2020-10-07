import router from '../router/router'

export const getLocalStorage = () => {
    return {
        access_token: localStorage.getItem('access_token'),
        expire_date: localStorage.getItem('expire_date')
    }
}

export const redirectRoute = (nameRoute) => {
    if(router.history.current.name !== nameRoute){
        router.push({
            name: nameRoute
        });
    }
}

export const isUserHasLogin = () => {
    let isAuth = false;
    const access_token = getLocalStorage().access_token;
    const expire_date = new Date(getLocalStorage().expire_date);
    const dateNow = new Date();

    if(access_token){
        isAuth = true;
        if(expire_date < dateNow){
            isAuth = false;
        }
    }
    return isAuth;
}

