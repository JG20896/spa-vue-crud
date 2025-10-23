<template>
  <div class="row">
    <div v-for="producto in productos" :key="producto.id" class="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div class="card h-100 product-card">
        <div class="image-container">
          <img 
            :src="producto.imagen" 
            class="card-img-top" 
            :alt="producto.nombre" 
            @error="handleImageError"
            loading="lazy"
          >
          <div class="image-overlay">
            <span class="badge bg-primary">{{ producto.categoria }}</span>
          </div>
        </div>
        
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ producto.nombre }}</h5>
          <p class="card-text flex-grow-1 text-muted">{{ producto.descripcion }}</p>
          
          <div class="product-info">
            <div class="price-tag">
              <strong>${{ producto.precio }}</strong>
            </div>
          </div>
          
          <div class="mt-auto">
            <div class="btn-group w-100" role="group">
              <button 
                @click="agregarAlCarrito(producto)" 
                class="btn btn-success"
                :disabled="estaEnCarrito(producto.id)"
                :class="{ 'btn-outline-success': estaEnCarrito(producto.id) }"
              >
                {{ estaEnCarrito(producto.id) ? '✅ Agregado' : '🛒 Agregar' }}
              </button>
              <router-link 
                :to="`/productos/${producto.id}`" 
                class="btn btn-outline-warning"
              >
                ✏️
              </router-link>
              <button 
                @click="confirmarEliminacion(producto.id)" 
                class="btn btn-outline-danger"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'ProductList',
  props: {
    productos: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    ...mapState(useCarritoStore, ['estaEnCarrito'])
  },
  methods: {
    ...mapActions(useProductoStore, ['eliminarProducto']),
    ...mapActions(useCarritoStore, ['agregarAlCarrito']),
    
    handleImageError(event) {
      event.target.src = `https://picsum.photos/400/300?random=${Math.random() * 1000}`
    },
    
    confirmarEliminacion(id) {
      if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        this.eliminarProducto(id)
      }
    }
  }
}
</script>

<style scoped>
.product-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  transition: transform 0.3s ease;
  height: 200px;
  object-fit: cover;
}

.product-card:hover .image-container img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
}

.price-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.1em;
  text-align: center;
  margin: 1rem 0;
}

.btn-group .btn {
  border-radius: 0;
}

.btn-group .btn:first-child {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.btn-group .btn:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
</style>