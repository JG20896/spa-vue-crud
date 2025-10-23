<template>
  <div class="home-view">
    <div class="container">
      <!-- Hero Section -->
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-6">
          <div class="hero-content">
            <h1 class="display-4 fw-bold text-primary mb-4">
              🛍️ Bienvenido a Mi Tienda Online
            </h1>
            <p class="lead mb-4">
              Descubre nuestra amplia selección de productos tecnológicos. 
              Desde smartphones hasta laptops gaming, todo en un solo lugar.
            </p>
            <div class="d-flex gap-3">
              <router-link to="/productos" class="btn btn-primary btn-lg">
                📦 Ver Productos
              </router-link>
              <router-link to="/about" class="btn btn-outline-secondary btn-lg">
                ℹ️ Conoce Más
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-image text-center">
            <div style="font-size: 8rem;">🛒</div>
            <p class="text-muted mt-3">Tu tienda de confianza</p>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="row mt-5 py-5">
        <div class="col-12 text-center mb-5">
          <h2 class="fw-bold">¿Por qué elegirnos?</h2>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body text-center p-4">
              <div class="feature-icon mb-3">
                <span style="font-size: 3rem;">⚡</span>
              </div>
              <h5>Envío Rápido</h5>
              <p class="text-muted">Recibe tus productos en menos de 48 horas</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body text-center p-4">
              <div class="feature-icon mb-3">
                <span style="font-size: 3rem;">🛡️</span>
              </div>
              <h5>Compra Segura</h5>
              <p class="text-muted">Transacciones 100% seguras y protegidas</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body text-center p-4">
              <div class="feature-icon mb-3">
                <span style="font-size: 3rem;">💬</span>
              </div>
              <h5>Soporte 24/7</h5>
              <p class="text-muted">Atención al cliente siempre disponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
}

.hero-content {
  color: white;
}

.min-vh-100 {
  min-height: 100vh;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  transition: transform 0.3s ease;
}

.card:hover .feature-icon {
  transform: scale(1.1);
}
</style>