import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: []
  }),

  getters: {
    estaEnCarrito: (state) => (id) => {
      return state.items.some(item => item.id === id)
    },
    
    totalItems: (state) => {
      return state.items.length
    },
    
    totalPrecio: (state) => {
      return state.items.reduce((total, item) => total + item.precio, 0)
    }
  },

  actions: {
    agregarAlCarrito(producto) {
      if (!this.estaEnCarrito(producto.id)) {
        this.items.push({ ...producto })
        console.log('✅ Producto agregado al carrito:', producto.nombre)
      } else {
        console.log('⚠️ Producto ya está en el carrito:', producto.nombre)
      }
    },

    removerDelCarrito(id) {
      this.items = this.items.filter(item => item.id !== id)
      console.log('🗑️ Producto removido del carrito, ID:', id)
    },

    limpiarCarrito() {
      if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        this.items = []
        console.log('🔄 Carrito limpiado')
      }
    }
  }
})