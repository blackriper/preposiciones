import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listening',
    name: 'Listen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Listen.vue')
  },
  {
    path: '/activity1',
    name: 'Activity 1',
    component: ()=>import('../views/Activity1')
  },
  {
    path: '/activity2',
    name: 'Activity 2',
    component: ()=>import('../views/Activity2')
  },
  {
    path: '/activity3',
    name: 'Activity 3',
    component: ()=>import('../views/Activity3')
  },
  {
    path: '/understanding',
    name: 'Video',
    component: ()=>import('../views/Video')
  }

]

const router = new VueRouter({
  routes
})

export default router
