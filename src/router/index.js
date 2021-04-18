import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sign',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/phone',
    name: 'phone',
    component: () => import('../views/phone.vue')
  },
  {
    path: '/code',
    name: 'code',
    component: () => import('../views/code.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/me.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/edit.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/message.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/videolist.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
