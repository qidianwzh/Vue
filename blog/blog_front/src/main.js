// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/style.css'
import axios from "axios"
import vueAxios from "vue-axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('@/assets/css/swiper.min.css')
import Vuex from 'vuex'
import store from './store/index.js'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(vueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
