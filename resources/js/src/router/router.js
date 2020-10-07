import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

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
      return next();
  });

  
export default router;