import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Offers from '../views/Offers.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
