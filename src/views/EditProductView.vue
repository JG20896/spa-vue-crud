<template>
  <div class="edit-product-view">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">✏️ Editar Producto</h3>
          </div>
          <div class="card-body">
            <ProductForm 
              v-if="producto"
              :producto="producto"
              :isEditing="true"
              @submit="actualizarProducto"
            />
            <div v-else class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Cargando...</span>
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
  computed: {
    ...mapState(useProductoStore, ['obtenerProductoPorId']),
    
    producto() {
      return this.obtenerProductoPorId(parseInt(this.id))
    }
  },
  methods: {
    ...mapActions(useProductoStore, ['actualizarProducto']),
    
    actualizarProducto(productoActualizado) {
      this.actualizarProducto(parseInt(this.id), productoActualizado)
      this.$router.push('/productos')
    }
  }
}
</script>