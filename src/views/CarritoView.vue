<template>
  <div class="carrito-view">
    <div class="container">
      <!-- Header -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h1 class="mb-1">🛒 Mi Carrito</h1>
              <p class="text-muted mb-0">Gestiona tus productos seleccionados</p>
            </div>
            <router-link to="/productos" class="btn btn-outline-primary">
              ← Seguir Comprando
            </router-link>
          </div>
        </div>
      </div>

      <!-- Carrito vacío -->
      <div v-if="itemsAgrupados.length === 0" class="text-center py-5">
        <div class="empty-cart">
          <div class="mb-4">
            <span style="font-size: 4rem;">🛒</span>
          </div>
          <h3>Tu carrito está vacío</h3>
          <p class="text-muted">Agrega algunos productos para comenzar</p>
          <router-link to="/productos" class="btn btn-primary btn-lg">
            📦 Explorar Productos
          </router-link>
        </div>
      </div>

      <!-- Carrito con productos -->
      <div v-else class="row">
        <!-- Lista de productos -->
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header bg-light">
              <h5 class="mb-0">Productos en el Carrito ({{ totalItems }})</h5>
            </div>
            <div class="card-body p-0">
              <div v-for="item in itemsAgrupados" :key="item.id" class="cart-item border-bottom p-3">
                <div class="row align-items-center">
                  <div class="col-2">
                    <img 
                      :src="item.imagen" 
                      :alt="item.nombre" 
                      class="img-fluid rounded"
                      style="height: 60px; object-fit: cover;"
                      @error="handleImageError"
                    >
                  </div>
                  <div class="col-5">
                    <h6 class="mb-1">{{ item.nombre }}</h6>
                    <small class="text-muted">{{ item.categoria }}</small>
                    <p class="mb-0 text-success fw-bold">${{ item.precio }}</p>
                  </div>
                  <div class="col-3">
                    <div class="d-flex align-items-center">
                      <button 
                        @click="disminuirCantidad(item.id)" 
                        class="btn btn-outline-secondary btn-sm"
                        :disabled="item.cantidad <= 1"
                      >
                        -
                      </button>
                      <span class="mx-3 fw-bold">{{ item.cantidad }}</span>
                      <button 
                        @click="aumentarCantidad(item.id)" 
                        class="btn btn-outline-secondary btn-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="col-2 text-end">
                    <div class="mb-2">
                      <strong>${{ item.subtotal.toFixed(2) }}</strong>
                    </div>
                    <button 
                      @click="removerDelCarrito(item.id)" 
                      class="btn btn-outline-danger btn-sm"
                      title="Eliminar del carrito"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resumen del pedido -->
        <div class="col-lg-4">
          <div class="card sticky-top" style="top: 20px;">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">📋 Resumen del Pedido</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${{ totalPrecio.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span class="text-success">Gratis</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>Impuestos (10%):</span>
                <span>${{ (totalPrecio * 0.10).toFixed(2) }}</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong class="text-primary">${{ (totalPrecio * 1.10).toFixed(2) }}</strong>
              </div>
              
              <button class="btn btn-success w-100 mb-2" @click="procederPago">
                💳 Proceder al Pago
              </button>
              <button class="btn btn-outline-danger w-100" @click="limpiarCarrito">
                🗑️ Vaciar Carrito
              </button>
              
              <div class="mt-3 text-center">
                <small class="text-muted">
                  ✅ Compra 100% segura<br>
                  🔄 Devolución en 30 días
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCarritoStore } from '../stores/useCarritoStore'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'CarritoView',
  computed: {
    ...mapState(useCarritoStore, [
      'itemsAgrupados', 
      'totalItems', 
      'totalPrecio'
    ])
  },
  methods: {
    ...mapActions(useCarritoStore, [
      'removerDelCarrito',
      'limpiarCarrito',
      'aumentarCantidad',
      'disminuirCantidad'
    ]),
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/100x100?text=Imagen+No+Disponible'
    },
    
    procederPago() {
      alert('¡Funcionalidad de pago en desarrollo! 🚀\n\nTotal: $' + (this.totalPrecio * 1.10).toFixed(2))
    }
  }
}
</script>

<style scoped>
.empty-cart {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 4rem 2rem;
}

.cart-item {
  transition: background-color 0.3s ease;
}

.cart-item:hover {
  background-color: #f8f9fa;
}

.sticky-top {
  position: sticky;
  z-index: 10;
}

.btn {
  border-radius: 8px;
}
</style>