import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter);

import {isUserHasLogin} from '../Helper/Helper'

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition){
      return {
        x: 0,
        y: 0
      }
    }
  })

  router.beforeEach( (to, from, next) => {
      if(to.name === 'login'){
        if(isUserHasLogin()){
            return next({
                name:'home'
            })
        }
      }
      return next();
  });

  
export default router;