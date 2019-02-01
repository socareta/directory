import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Letter from '@/components/Letter'
import Directory from '@/components/Directory'
import Activities from '@/components/Activities'
import Mudara from '@/components/Mudara'
import Youtube from '@/components/Youtube'
import Cruisine from '@/components/Cruisine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome-letter',
      name: 'letter',
      component: Letter
    },
    {
      path: '/guest-directory',
      name: 'directory',
      component: Directory
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/spa-mudara',
      name: 'mudara',
      component: Mudara
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: Youtube
    },
    {
      path: '/cruisine-menu',
      name: 'cruisine-menu',
      component: Cruisine
    }
  ]
})
