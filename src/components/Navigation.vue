<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/">🛍️ Tienda Vue</router-link>
      
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link" to="/">Inicio</router-link>
        <router-link class="nav-link" to="/productos">Productos</router-link>
        <router-link class="nav-link" to="/productos/crear">Crear Producto</router-link>
        <router-link class="nav-link position-relative" to="/carrito">
          🛒 Carrito
          <span v-if="totalArticulos > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ totalArticulos }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCarritoStore } from '../stores/useCarritoStore'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useCarritoStore, ['totalArticulos'])
  }
}
</script>