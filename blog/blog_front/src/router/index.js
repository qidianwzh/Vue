import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: () => import('@/components/Home/Article/loading.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/components/Home/index.vue')
    },
    {
      path: '/blog_main',
      name: 'blogMain',
      component: () => import('@/components/Home/Article/index.vue'),
      children:[
        {
          path:'/blog_main/detail',
          name: 'Detail',
          component:() => import('@/components/Home/Article/detail.vue')
        },
        {
          path: '',
          name: 'List',
          component:() => import('@/components/Home/Article/list.vue')
        }

      ]
    }
  ]
})
