import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const csrf_token = document.getElementsByTagName('meta')['csrf_token'].getAttribute('content');

instance.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';

// console.log(instance.defaults.headers.common)

export default instance;