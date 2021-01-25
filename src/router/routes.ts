import {RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext} from 'vue-router'
import store from '../store'
import Login from '../components/Login/index.vue'
import Main from '../components/Main/index.vue'

const ifNotAuthenticated = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: Main
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    beforeEnter: ifNotAuthenticated
  }
]

export default routes