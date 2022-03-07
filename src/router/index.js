import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Question from '@/components/question'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/quest',
      name: 'Question',
      component: Question
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
