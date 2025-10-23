<template>
  <div class="products-view">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📦 Nuestros Productos</h2>
      <router-link to="/productos/crear" class="btn btn-success">
        ➕ Nuevo Producto
      </router-link>
    </div>

    <ProductList :productos="productos" />
  </div>
</template>

<script>
import { useProductoStore } from '../stores/useProductoStore'
import { mapState } from 'pinia'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductList
  },
  computed: {
    ...mapState(useProductoStore, ['productos'])
  }
}
</script>