import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify);

import store from './src/store/store'
import router from './src/router/router'
import App from './src/App'

new Vue({
   el: '#app',
   store,
   router,
   vuetify: new Vuetify(),
   render: h => h(App)
});