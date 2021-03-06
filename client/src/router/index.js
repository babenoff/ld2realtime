import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterComponent from '@/components/RegisterComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    }
  ]
})
