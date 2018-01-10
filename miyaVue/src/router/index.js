import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import Classify from '@/components/page/classify'
import Cart from '@/components/page/cart'
import Home from '@/components/page/home'
import Details from '@/components/page/details'
import Register from '@/components/page/home/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/details/:id/:name/:saleP/:market',
      name: 'details',
      component: Details
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
