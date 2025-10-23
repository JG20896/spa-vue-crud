import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import CreateProductView from '../views/CreateProductView.vue'
import EditProductView from '../views/EditProductView.vue'
import AboutView from '../views/AboutView.vue'
import CarritoView from '../views/CarritoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'Productos',
    component: ProductosView
  },
  {
    path: '/productos/crear',
    name: 'CreateProduct',
    component: CreateProductView
  },
  {
    path: '/productos/:id',
    name: 'EditProduct',
    component: EditProductView,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router