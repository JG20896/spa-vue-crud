<template>
  <div class="developers-section mt-5">
    <div class="card">
      <div class="card-header bg-dark text-white">
        <h4 class="mb-0">👨‍💻 Equipo de Desarrollo</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div v-for="dev in developers" :key="dev.id" class="col-md-6 col-lg-3 mb-3">
            <div class="developer-card text-center p-3 border rounded">
              <div class="developer-avatar mb-2">
                <span class="avatar-icon">👤</span>
              </div>
              <h6 class="developer-name">{{ dev.nombre }}</h6>
              <p class="developer-control mb-1">
                <small class="text-muted">No. Control:</small><br>
                <strong>{{ dev.numeroControl }}</strong>
              </p>
              <p class="developer-role mb-0">
                <small class="badge bg-primary">{{ dev.rol }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevelopersInfo',
  data() {
    return {
      developers: [
        {
          id: 1,
          nombre: 'JOSE GABRIEL HERNANDEZ PEREZ', 
          numeroControl: '23270690', 
          rol: 'Full Stack Developer'
        },
        {
          id: 2,
          nombre: 'IVAN ALEXANDER PEREZ ICHIN', 
          numeroControl: '23270672', 
          rol: 'Frontend Developer'
        },
        {
          id: 3,
          nombre: 'RICARDO JORDAN ESCOBAR OVANDO', 
          numeroControl: '23271437',
          rol: 'Backend Developer'
        },
        {
          id: 4,
          nombre: 'DIEGO MARTINEZ GOMEZ',
          numeroControl: '23271428', 
          rol: 'UI/UX Designer'
        }
      ]
    }
  }
}
</script>

<style scoped>
.developer-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.developer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.avatar-icon {
  font-size: 2.5rem;
  display: inline-block;
}

.developer-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.developer-control {
  font-size: 0.9rem;
}

.badge {
  font-size: 0.7rem;
}
</style>