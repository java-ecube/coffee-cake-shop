import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeeOrderView from '@/components/CoffeeOrderView.vue'
import CakeOrderView from '@/components/CakeOrderView.vue'
import CoffeeOrderedDetailView from '@/components/CoffeeOrderedDetailView.vue'
import CoffeeDetailsView from '@/components/CoffeeDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/coffee',
    name: 'coffee',
    component: CoffeeOrderView
  },

   {
    path: '/cake',
    name: 'cake',
    component: CakeOrderView
  },
   {
    path: '/details/:coffee',
    name: 'details',
    component: CoffeeDetailsView
  },
  {
    path: '/order',
    name: 'order',
    component: CoffeeOrderedDetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
