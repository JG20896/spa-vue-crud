<template>
  <div class="edit-product-view">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header bg-warning text-dark">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="card-title mb-0">✏️ Editar Producto</h3>
              <router-link to="/productos" class="btn btn-dark btn-sm">
                ← Volver a Productos
              </router-link>
            </div>
          </div>
          <div class="card-body">
            <ProductForm
              v-if="producto && !loading"
              :producto="producto"
              :isEditing="true"
              @submit="handleUpdateProduct"
            />
            <div v-else class="text-center py-5">
              <div v-if="!error" class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Cargando producto...</span>
              </div>
              <p class="mt-3 text-muted" v-if="!error">Cargando información del producto...</p>
              <div v-if="error">
                <p class="text-danger mb-3">❌ Error: No se pudo cargar el producto</p>
                <router-link to="/productos" class="btn btn-primary">
                  Volver a Productos
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductoStore } from '../stores/useProductoStore'
import { mapState, mapActions } from 'pinia'
import ProductForm from '../components/ProductForm.vue'

export default {
  name: 'EditProductView',
  components: {
    ProductForm
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      error: false,
      loading: true
    }
  },
  computed: {
    ...mapState(useProductoStore, {
      obtenerProductoPorId: 'obtenerProductoPorId'
    }),

    producto() {
      const productoId = parseInt(this.id);
      
      if (isNaN(productoId)) {
        console.error('❌ ID de producto inválido:', this.id);
        this.error = true;
        this.loading = false;
        return null;
      }

      const productoEncontrado = this.obtenerProductoPorId(productoId);
      console.log('🔍 Buscando producto ID:', productoId, 'Encontrado:', productoEncontrado);
      
      if (!productoEncontrado) {
        this.error = true;
        console.error('❌ PRODUCTO NO ENCONTRADO para ID:', productoId);
      }
      
      this.loading = false;
      return productoEncontrado;
    },

    productoId() {
      return parseInt(this.id);
    }
  },
  methods: {
    ...mapActions(useProductoStore, ['actualizarProducto']),

    async handleUpdateProduct(productoActualizado) {
      console.log('🔄 Actualizando producto ID:', this.productoId, 'Datos:', productoActualizado);
      
      try {
        // Validar que no sea un evento
        if (productoActualizado instanceof SubmitEvent) {
          console.warn('❌ Se recibió SubmitEvent en lugar de datos');
          return;
        }

        await this.actualizarProducto(this.productoId, productoActualizado);
        console.log('✅ Producto actualizado, redirigiendo...');
        
        // Redirigir después de una actualización exitosa
        this.$router.push('/productos');
        
      } catch (error) {
        console.error('❌ Error al actualizar producto:', error);
        alert('Error al actualizar el producto. Por favor, intenta nuevamente.');
      }
    }
  },
  mounted() {
    console.log('🏁 EditProductView montado, ID recibido:', this.id);
    console.log('🔍 Tipo de ID:', typeof this.id);
    
    // Timeout de seguridad por si el producto no se carga
    setTimeout(() => {
      if (this.loading) {
        console.warn('⚠️ Timeout de carga del producto');
        this.loading = false;
        this.error = true;
      }
    }, 3000);
  }
}
</script>