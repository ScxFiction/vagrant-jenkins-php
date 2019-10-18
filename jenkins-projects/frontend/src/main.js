import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import NProgress from 'nprogress'
import VueClipboard from 'vue-clipboard2'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

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

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueClipboard)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
