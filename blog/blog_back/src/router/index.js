import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Back from '@/components/back'
import Main from '@/components/main'
import api_add from '@/components/api/api_add'
import api_list from '@/components/api/api_list'
import api_list_detail from '@/components/api/api_list_detail'

import add_one_class from '@/components/class/add_one_class'
import add_two_class from '@/components/class/add_two_class'
import amend_one_class from '@/components/class/amend_one_class'
import amend_two_class from '@/components/class/amend_two_class'
import class_list from '@/components/class/classList'
import add_article from '@/components/article/add_article'
import amend_article from '@/components/article/amend_article'
import article_list from '@/components/article/article_list'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      
    },
    {
      path: '/back',
      name: 'Back',
      component: Back,
      children:[
        {
          path:"main",
          name:"Main",
          component:Main
        },
        {
          path:"api_add",
          name:"api_add",
          component:api_add
        },
        {
          path:"api_list",
          name:"api_list",
          component:api_list
        },
        {
          path:"api_list_detail",
          name:"api_list_detail",
          component:api_list_detail
        },
        {
          path:"add_one_class",
          name:"add_one_class",
          component:add_one_class
        },
        {
          path:"add_two_class",
          name:"add_two_class",
          component:add_two_class
        },
        {
          path:"amend_one_class",
          name:"amend_one_class",
          component:amend_one_class
        },
        {
          path:"amend_two_class",
          name:"amend_two_class",
          component:amend_two_class
        },
        {
          path:"class_list",
          name:"class_list",
          component:class_list
        },
        {
          path:"add_article",
          name:"add_article",
          component:add_article
        },
        {
          path:"amend_article",
          name:"amend_article",
          component:amend_article
        },
        {
          path:"article_list",
          name:"article_list",
          component:article_list
        }
      ]
    }
  ]
})
