<template>
  <div class="productos-view">
    <div class="container">
      <!-- Header -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h1 class="mb-1">🛍️ Nuestros Productos</h1>
              <p class="text-muted mb-0">{{ productos.length }} productos disponibles</p>
            </div>
            <div>
              <router-link to="/productos/crear" class="btn btn-primary me-2">
                ➕ Nuevo Producto
              </router-link>
              <router-link to="/carrito" class="btn btn-success position-relative">
                🛒 Carrito
                <span v-if="totalItems > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ totalItems }}
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="🔍 Buscar productos..." 
                    v-model="busqueda"
                  >
                </div>
                <div class="col-md-6">
                  <select class="form-select" v-model="categoriaFiltro">
                    <option value="">Todas las categorías</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="Audio">Audio</option>
                    <option value="Fotografía">Fotografía</option>
                    <option value="Gaming">Gaming</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lista de Productos -->
      <ProductList :productos="productosFiltrados" />

      <!-- Estado vacío -->
      <div v-if="productosFiltrados.length === 0" class="text-center py-5">
        <div class="empty-state">
          <h3>📭 No se encontraron productos</h3>
          <p class="text-muted">Intenta con otros términos de búsqueda o crea un nuevo producto.</p>
          <router-link to="/productos/crear" class="btn btn-primary">
            ➕ Crear Primer Producto
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import { mapState } from 'pinia'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductosView',
  components: {
    ProductList
  },
  data() {
    return {
      busqueda: '',
      categoriaFiltro: ''
    }
  },
  computed: {
    ...mapState(useProductoStore, ['productos']),
    ...mapState(useCarritoStore, ['totalItems']),
    
    productosFiltrados() {
      return this.productos.filter(producto => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                               producto.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
        const coincideCategoria = !this.categoriaFiltro || producto.categoria === this.categoriaFiltro
        
        return coincideBusqueda && coincideCategoria
      })
    }
  },
  mounted() {
    console.log('ProductosView montado - productos:', this.productos)
  }
}
</script>

<style scoped>
.empty-state {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 3rem;
}

.badge {
  font-size: 0.7em;
}

.productos-view {
  min-height: 80vh;
}
</style>