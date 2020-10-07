import axios from '../../axiosConfig'
import {redirectRoute, getLocalStorage} from '../../Helper/Helper'
import * as authTypes from './types'



const setAuthorizationHeader = (access_token) => {
    if(access_token != null) {
        axios.defaults.headers.common['Authorization'] = access_token;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

const setLocalStorage = (payload) => {
    if(payload){
        const expireDate = new Date().getTime() + (payload.expires_in * 1000)
        const accesToken = payload.token_type +' '+ payload.access_token;
        localStorage.setItem('access_token', accesToken);
        localStorage.setItem('expire_date', new Date(expireDate));
        localStorage.setItem('username', payload.user.username);
        localStorage.setItem('name', payload.user.name);
        setAuthorizationHeader(accesToken);
    }else{
        localStorage.removeItem('access_token');
        localStorage.removeItem('expire_date');
        localStorage.removeItem('username');
        localStorage.removeItem('name');
        setAuthorizationHeader(null);
    }
}



const state = {
    userAuth: {
        // access_token: null,
        // expire_date: null,
        // username: null,
        // name: null
    },
    isAuth: false
}

const mutations = {
    [authTypes.MUTATION_LOGIN]: (state, payload) => {
        state.userAuth.access_token = payload.access_token
        state.userAuth.expires_in = payload.expires_in
        state.userAuth.username = payload.user.username
        state.userAuth.name = payload.user.name
        state.isAuth = true;

        setLocalStorage(payload);
    },
    [authTypes.MUTATION_LOGOUT]: (state) => {
        state.userAuth = {};
        state.isAuth = false;
        setLocalStorage(null);
    },
}

const actions = {
    [authTypes.ACTION_LOGIN]: ({commit}, payload) => {
        return new Promise( (success, error) => {
            axios.post('/auth/login', payload)
            .then( (res) => {
                redirectRoute('home')
                commit(authTypes.MUTATION_LOGIN, res.data)
                success(res.data);
            })
            .catch( (err) => {
                error(err);
            })
        })
    },
    [authTypes.ACTION_LOGOUT]: ({commit}) => {
        return new Promise( (success, error) => {
            axios.post('/auth/logout')
            .then( (res) => {
                success(res.data);
                commit(authTypes.MUTATION_LOGOUT);
                redirectRoute('home')
            })
            .catch( (err) => {
                error(err);
            })
        })
    },
    [authTypes.ACTION_REFRESH_TOKEN]: ({commit}) => {
        return new Promise((success, error) => {
            axios.post('/auth/refresh')
            .then( (res) => {
                commit(authTypes.MUTATION_LOGIN, res.data)
                success(res.data);
            })
            .catch( (err) => {
                error(err);
            })
        })
    },
    [authTypes.ACTION_TOKEN_FROM_LOCAL_STORAGE]: ({commit, dispatch}) => {
        const access_token = getLocalStorage().access_token;
        if(!access_token){
            // redirectRoute('login');
        }else{
            const expire_date = new Date(getLocalStorage().expire_date);
            const dateNow = new Date();
            if(expire_date > dateNow){
                setAuthorizationHeader(access_token);
                return dispatch(authTypes.ACTION_REFRESH_TOKEN)
            }else{
                commit(authTypes.MUTATION_LOGOUT)
            }
        }
    },
}

const getters = {
    [authTypes.GETTER_ISAUTH]: (state) => {
        return state.isAuth;
    },
    [authTypes.GETTER_USER_LOGINED]: (state) => {
        return state.userAuth;
    }
}

const auth = {
    state,
    mutations,
    actions,
    getters
}

export default auth;