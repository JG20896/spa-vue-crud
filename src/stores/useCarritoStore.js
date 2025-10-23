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
    },
    
    itemsAgrupados: (state) => {
      const agrupados = state.items.reduce((grupos, item) => {
        const existente = grupos.find(g => g.id === item.id)
        if (existente) {
          existente.cantidad++
          existente.subtotal = existente.precio * existente.cantidad
        } else {
          grupos.push({
            ...item,
            cantidad: 1,
            subtotal: item.precio
          })
        }
        return grupos
      }, [])
      
      return agrupados
    }
  },

  actions: {
    agregarAlCarrito(producto) {
      this.items.push({ ...producto })
    },

    removerDelCarrito(id) {
      this.items = this.items.filter(item => item.id !== id)
    },

    limpiarCarrito() {
      if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        this.items = []
      }
    },
    
    aumentarCantidad(id) {
      const item = this.items.find(item => item.id === id)
      if (item) {
        this.items.push({ ...item })
      }
    },
    
    disminuirCantidad(id) {
      const index = this.items.findIndex(item => item.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    }
  }
})