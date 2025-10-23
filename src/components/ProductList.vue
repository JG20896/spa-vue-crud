<template>
  <div class="row">
    <div v-for="producto in productos" :key="producto.id" class="col-md-4 mb-4">
      <div class="card h-100">
        <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ producto.nombre }}</h5>
          <p class="card-text flex-grow-1">{{ producto.descripcion }}</p>
          <p class="card-text"><strong>Categoría:</strong> {{ producto.categoria }}</p>
          <p class="card-text"><strong>Precio:</strong> ${{ producto.precio }}</p>
          
          <div class="mt-auto">
            <div class="btn-group w-100" role="group">
              <button 
                @click="agregarAlCarrito(producto)" 
                class="btn btn-success"
                :disabled="estaEnCarrito(producto.id)"
              >
                {{ estaEnCarrito(producto.id) ? '✅ En Carrito' : '🛒 Agregar' }}
              </button>
              <router-link 
                :to="`/productos/${producto.id}`" 
                class="btn btn-warning"
              >
                ✏️ Editar
              </router-link>
              <button 
                @click="eliminarProducto(producto.id)" 
                class="btn btn-danger"
              >
                🗑️ Eliminar
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
  props: {
    productos: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(useCarritoStore, ['estaEnCarrito'])
  },
  methods: {
    ...mapActions(useProductoStore, ['eliminarProducto']),
    ...mapActions(useCarritoStore, ['agregarAlCarrito'])
  }
}
</script>