import Home from '../views/Home'
import Question from '../views/Question'
import Category from '../views/Category'

//Auth
import Login from '../views/Auth/Login'
import Signup from '../views/Auth/Signup'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/question',
        component: Question
    },
    {
        path: '/category',
        component: Category
    },



    // Auth
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },

]


export default routes;
