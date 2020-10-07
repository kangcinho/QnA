import Home from '../views/Home'
import Question from '../views/Question'
import Category from '../views/Category'

//Auth
import Login from '../views/Auth/Login'
import Signup from '../views/Auth/Signup'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        
    },
    {
        path: '/question',
        name: 'question',
        component: Question,
        children:[
            {
                path: '/question/:slug/reply',
                name: 'reply',
            }
        ]
    },
    {
        path: '/category',
        name: 'category',
        component: Category,
    },



    // Auth
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },

]


export default routes;
