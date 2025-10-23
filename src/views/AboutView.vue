<template>
  <div class="about-view">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Header -->
          <div class="text-center mb-5">
            <h1 class="display-4 text-primary">ℹ️ Acerca de Nosotros</h1>
            <p class="lead">Conoce al equipo detrás de esta increíble aplicación</p>
          </div>

          <!-- Misión y Visión -->
          <div class="row mb-5">
            <div class="col-md-6 mb-4">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="mb-3">
                    <span style="font-size: 3rem;">🎯</span>
                  </div>
                  <h4 class="card-title text-primary">Nuestra Misión</h4>
                  <p class="card-text">
                    Desarrollar aplicaciones web innovadoras que simplifiquen la gestión de productos 
                    y ofrezcan una experiencia de usuario excepcional utilizando las últimas tecnologías.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="mb-3">
                    <span style="font-size: 3rem;">🔭</span>
                  </div>
                  <h4 class="card-title text-primary">Nuestra Visión</h4>
                  <p class="card-text">
                    Ser reconocidos como líderes en el desarrollo de soluciones web eficientes 
                    y escalables que impulsen el crecimiento digital de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tecnologías Utilizadas -->
          <div class="card mb-5 border-0 shadow-sm">
            <div class="card-header bg-light">
              <h4 class="mb-0">🛠️ Tecnologías Utilizadas</h4>
            </div>
            <div class="card-body">
              <div class="row text-center">
                <div class="col-6 col-md-3 mb-3">
                  <div class="tech-item p-3">
                    <span style="font-size: 2.5rem;">⚡</span>
                    <h6 class="mt-2">Vue.js 3</h6>
                    <small class="text-muted">Framework Frontend</small>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div class="tech-item p-3">
                    <span style="font-size: 2.5rem;">📦</span>
                    <h6 class="mt-2">Pinia</h6>
                    <small class="text-muted">Gestión de Estado</small>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div class="tech-item p-3">
                    <span style="font-size: 2.5rem;">🎨</span>
                    <h6 class="mt-2">Bootstrap 5</h6>
                    <small class="text-muted">Framework CSS</small>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <div class="tech-item p-3">
                    <span style="font-size: 2.5rem;">🛣️</span>
                    <h6 class="mt-2">Vue Router</h6>
                    <small class="text-muted">Ruteo</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Equipo de Desarrollo -->
          <DevelopersInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DevelopersInfo from '../components/DevelopersInfo.vue'

export default {
  name: 'AboutView',
  components: {
    DevelopersInfo
  }
}
</script>

<style scoped>
.about-view {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.tech-item {
  transition: transform 0.3s ease;
  border-radius: 10px;
}

.tech-item:hover {
  transform: translateY(-5px);
  background: #f8f9fa;
}

.card {
  border-radius: 15px;
}
</style>