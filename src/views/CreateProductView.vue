<template>
  <div class="create-product-view">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="card-title mb-0">➕ Crear Nuevo Producto</h3>
              <router-link to="/productos" class="btn btn-light btn-sm">
                ← Volver a Productos
              </router-link>
            </div>
          </div>
          <div class="card-body">
            <ProductForm
              @submit="handleCreateProduct"
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

    async handleCreateProduct(productoData) {
      try {
        console.log('🔄 Creando producto:', productoData)
        await this.crearProducto(productoData)
        console.log('✅ Producto creado exitosamente')
        this.$router.push('/productos')
      } catch (error) {
        console.error('❌ Error al crear producto:', error)
        alert('Error al crear el producto. Intenta nuevamente.')
      }
    }
  },
  mounted() {
    console.log('🏁 CreateProductView montado')
  }
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>