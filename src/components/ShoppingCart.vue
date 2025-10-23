<template>
  <div class="cart-container">
    <div v-if="carrito.length === 0" class="text-center py-5">
      <h3>🛒 Tu carrito está vacío</h3>
      <p>¡Agrega algunos productos!</p>
      <router-link to="/productos" class="btn btn-primary">
        Ver Productos
      </router-link>
    </div>

    <div v-else>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carrito" :key="item.id">
              <td>
                <div class="d-flex align-items-center">
                  <img :src="item.imagen" :alt="item.nombre" class="me-3" style="width: 50px; height: 50px; object-fit: cover;">
                  <div>
                    <h6 class="mb-0">{{ item.nombre }}</h6>
                    <small class="text-muted">{{ item.categoria }}</small>
                  </div>
                </div>
              </td>
              <td>${{ item.precio }}</td>
              <td>
                <div class="input-group input-group-sm" style="width: 120px;">
                  <button 
                    class="btn btn-outline-secondary" 
                    type="button"
                    @click="actualizarCantidad(item.id, item.cantidad - 1)"
                  >-</button>
                  <input 
                    type="number" 
                    class="form-control text-center" 
                    :value="item.cantidad"
                    @change="actualizarCantidad(item.id, $event.target.valueAsNumber)"
                    min="1"
                  >
                  <button 
                    class="btn btn-outline-secondary" 
                    type="button"
                    @click="actualizarCantidad(item.id, item.cantidad + 1)"
                  >+</button>
                </div>
              </td>
              <td>${{ (item.precio * item.cantidad).toFixed(2) }}</td>
              <td>
                <button 
                  @click="eliminarDelCarrito(item.id)" 
                  class="btn btn-danger btn-sm"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Resumen del Pedido</h5>
              <div class="d-flex justify-content-between">
                <span>Total Artículos:</span>
                <strong>{{ totalArticulos }}</strong>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <span>Precio Total:</span>
                <strong>${{ totalPrecio.toFixed(2) }}</strong>
              </div>
              <hr>
              <div class="d-grid gap-2">
                <button @click="vaciarCarrito" class="btn btn-outline-danger">
                  Vaciar Carrito
                </button>
                <button class="btn btn-success" @click="procesarPedido">
                  Proceder al Pago
                </button>
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
  computed: {
    ...mapState(useCarritoStore, ['carrito', 'totalArticulos', 'totalPrecio'])
  },
  methods: {
    ...mapActions(useCarritoStore, ['eliminarDelCarrito', 'vaciarCarrito', 'actualizarCantidad']),
    
    procesarPedido() {
      alert('¡Pedido procesado! Total: $' + this.totalPrecio.toFixed(2))
      this.vaciarCarrito()
    }
  }
}
</script>