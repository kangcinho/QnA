import axios from '../../axiosConfig'
import * as authTypes from './types'

const setAuthorizationHeader = (access_token) => {
    if(access_token != null) {
        // console.log(access_token)
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

const getLocalStorage = () => {
    return {
        access_token: localStorage.getItem('access_token'),
        expire_date: localStorage.getItem('expire_date')
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
        state.userAuth.expire_in = payload.expire_in
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
        const expire_date = new Date(getLocalStorage().expire_date);
        setAuthorizationHeader(access_token);

        //DSINI BISA CEK Expire Datenya untuk melakukan sesuatu, atau lsg Refresh Token
        const dateNow = new Date();
        if(expire_date > dateNow){
            console.log("REFRESH TOKEN")
            return dispatch(authTypes.ACTION_REFRESH_TOKEN)
        }else{
            console.log("LOGOUT")
            // commit(authTypes.MUTATION_LOGOUT)
        }
    },
}

const getters = {

}

const auth = {
    state,
    mutations,
    actions,
    getters
}

export default auth;