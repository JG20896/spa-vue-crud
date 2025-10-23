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
              v-if="producto"
              :producto="producto"
              :isEditing="true"
              @submit="handleUpdateProduct"
            />
            <div v-else class="text-center py-5">
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Cargando producto...</span>
              </div>
              <p class="mt-3 text-muted">Cargando información del producto...</p>
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
  computed: {
    ...mapState(useProductoStore, {
      obtenerProductoPorId: 'obtenerProductoPorId'
    }),

    producto() {
      return this.obtenerProductoPorId(parseInt(this.id))
    }
  },
  methods: {
    ...mapActions(useProductoStore, ['actualizarProducto']),

    handleUpdateProduct(productoActualizado) {
      this.actualizarProducto(parseInt(this.id), productoActualizado)
      this.$router.push('/productos')
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>