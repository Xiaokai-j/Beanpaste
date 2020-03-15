import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hot'
  }, {
    path: '/hot', // 正在热映
    compontent: () => import('@/views/hot')
  }, {
    path: '/movie', // 正在上映
    compontent: () => import('@/views/movie')
  }, {
    path: '/top', // top250榜单
    compontent: () => import('@/views/hot')
  }, {
    path: '/detail', // 详情
    compontent: () => import('@/views/hot')
  }
]

const router = new VueRouter({
  routes
})
export default router
