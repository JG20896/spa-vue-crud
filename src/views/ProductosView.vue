<template>
  <div class="container mt-4">
    <!-- Header Simple -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h1>Productos</h1>
        <p class="text-muted">{{ productos.length }} productos disponibles</p>
      </div>
      <div>
        <router-link to="/productos/crear" class="btn btn-primary me-2">
          Nuevo Producto
        </router-link>
        <router-link to="/carrito" class="btn btn-success">
          Carrito ({{ totalItems }})
        </router-link>
      </div>
    </div>

    <!-- Filtros Simples -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 mb-2">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Buscar productos..." 
              v-model="busqueda"
            >
          </div>
          <div class="col-md-6 mb-2">
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

    <!-- Lista de Productos -->
    <ProductList 
      :productos="productosFiltrados" 
      v-if="productos.length > 0"
    />

    <!-- Mensaje si no hay productos -->
    <div v-else class="text-center py-5">
      <h3>No hay productos</h3>
      <p class="text-muted">Crea tu primer producto para comenzar</p>
      <router-link to="/productos/crear" class="btn btn-primary">
        Crear Primer Producto
      </router-link>
    </div>

    <!-- Mensaje si filtros no encuentran resultados -->
    <div v-if="productos.length > 0 && productosFiltrados.length === 0" class="text-center py-5">
      <h3>No se encontraron productos</h3>
      <p class="text-muted">Intenta con otros términos de búsqueda</p>
      <button @click="limpiarFiltros" class="btn btn-primary">
        Limpiar Filtros
      </button>
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
      // Validar que productos sea un array
      if (!Array.isArray(this.productos) || this.productos.length === 0) {
        return [];
      }

      const busquedaNormalizada = (this.busqueda || '').toLowerCase();
      
      return this.productos.filter(producto => {
        // Validar que el producto exista
        if (!producto) {
          return false;
        }

        // Validar y normalizar propiedades del producto
        const nombre = producto.nombre?.toLowerCase() || '';
        const descripcion = producto.descripcion?.toLowerCase() || '';
        
        // Verificar coincidencia en búsqueda
        const coincideBusqueda = !busquedaNormalizada || 
                               nombre.includes(busquedaNormalizada) ||
                               descripcion.includes(busquedaNormalizada);
        
        // Verificar coincidencia en categoría
        const coincideCategoria = !this.categoriaFiltro || 
                                producto.categoria === this.categoriaFiltro;

        return coincideBusqueda && coincideCategoria;
      });
    }
  },
  methods: {
    limpiarFiltros() {
      this.busqueda = ''
      this.categoriaFiltro = ''
    }
  }
}
</script>

<style scoped>
/* Estilos básicos */
.container {
  max-width: 1200px;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.btn {
  border-radius: 6px;
  font-weight: 500;
}

.text-muted {
  color: #6c757d !important;
}
</style>