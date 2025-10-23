<template>
  <div class="home">
    <!-- Sección de bienvenida -->
    <div class="jumbotron bg-light p-5 rounded mb-4">
      <h1 class="display-4">🛍️ Bienvenido a Nuestra Tienda Vue</h1>
      <p class="lead">SPA desarrollada con Vue 3, Pinia y Vue Router</p>
      <hr class="my-4">
      <p>Gestiona productos y realiza compras de manera sencilla.</p>
      <router-link to="/productos" class="btn btn-primary btn-lg">
        Ver Productos
      </router-link>
    </div>

    <!-- Tarjetas de características -->
    <div class="row mb-5">
      <div class="col-md-4 mb-3">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title">📦 Gestión de Productos</h5>
            <p class="card-text">CRUD completo para administrar el inventario de productos.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title">🛒 Carrito Inteligente</h5>
            <p class="card-text">Carrito de compras con persistencia en localStorage.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title">⚡ Tecnología Moderna</h5>
            <p class="card-text">Vue 3, Composition API, Pinia y Vue Router.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Información de desarrolladores -->
    <DevelopersInfo />
  </div>
</template>

<script>
import DevelopersInfo from '../components/DevelopersInfo.vue'

export default {
  name: 'HomeView',
  components: {
    DevelopersInfo
  }
}
</script>