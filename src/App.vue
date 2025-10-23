<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">
          🛍️ Mi Tienda Online
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto">
            <router-link class="nav-link" to="/">
              🏠 Inicio
            </router-link>
            <router-link class="nav-link" to="/productos">
              📦 Productos
            </router-link>
            <router-link class="nav-link" to="/about">
              ℹ️ Acerca de
            </router-link>
            <router-link to="/carrito" class="nav-link position-relative">
              🛒 Carrito
              <span v-if="$pinia.state.value.carrito?.items?.length > 0" 
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ $pinia.state.value.carrito?.items?.length }}
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido Principal -->
    <main class="container-fluid p-0">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>🛍️ Mi Tienda Online</h5>
            <p class="mb-0">La mejor solución para gestión de productos</p>
          </div>
          <div class="col-md-6 text-md-end">
            <router-link to="/about" class="btn btn-outline-light btn-sm">
              👨‍💻 Conoce al equipo
            </router-link>
          </div>
        </div>
        <div class="text-center mt-3 pt-3 border-top">
          <p class="mb-0">&copy; 2024 Mi Tienda Online. Desarrollado con ❤️ usando Vue.js 3</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.navbar-brand {
  font-size: 1.5rem;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
  margin: 0 0.5rem;
}

.nav-link:hover {
  color: rgba(255,255,255,0.8) !important;
}

footer {
  margin-top: auto;
}
</style>