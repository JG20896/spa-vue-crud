<template>
  <div class="create-product-view">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0">➕ Crear Nuevo Producto</h3>
          </div>
          <div class="card-body">
            <ProductForm 
              @submit="crearProducto" 
              :isEditing="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductoStore } from '../stores/useProductoStore'
import { mapActions } from 'pinia'
import ProductForm from '../components/ProductForm.vue'

export default {
  name: 'CreateProductView',
  components: {
    ProductForm
  },
  methods: {
    ...mapActions(useProductoStore, ['crearProducto']),
    
    crearProducto(producto) {
      this.crearProducto(producto)
      this.$router.push('/productos')
    }
  }
}
</script>