import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CreateProductView from '../views/CreateProductView.vue'
import EditProductView from '../views/EditProductView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/productos/crear',
    name: 'create-product',
    component: CreateProductView
  },
  {
    path: '/productos/:id',
    name: 'edit-product',
    component: EditProductView,
    props: true
  },
  {
    path: '/carrito',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router