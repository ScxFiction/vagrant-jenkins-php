import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Body from './components/Body'
import New from './components/Jobs/New'

const routes = [
  {path: '/', component: Body},
  {path: '/jobs/new', component: New},
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
