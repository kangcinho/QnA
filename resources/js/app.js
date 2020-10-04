import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify);

import App from './src/App'

new Vue({
   el: '#app',
   vuetify: new Vuetify(),
   render: h => h(App)
});