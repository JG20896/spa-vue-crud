import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    carrito: []
  }),

  actions: {
    agregarAlCarrito(producto) {
      const productoExistente = this.carrito.find(item => item.id === producto.id)
      
      if (productoExistente) {
        productoExistente.cantidad += 1
      } else {
        this.carrito.push({
          ...producto,
          cantidad: 1
        })
      }
      
      // Persistir en localStorage (opcional)
      this.persistirCarrito()
    },

    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter(item => item.id !== id)
      this.persistirCarrito()
    },

    vaciarCarrito() {
      this.carrito = []
      this.persistirCarrito()
    },

    actualizarCantidad(id, cantidad) {
      const producto = this.carrito.find(item => item.id === id)
      if (producto) {
        producto.cantidad = cantidad
        if (producto.cantidad <= 0) {
          this.eliminarDelCarrito(id)
        }
      }
      this.persistirCarrito()
    },

    // Persistencia en localStorage
    persistirCarrito() {
      localStorage.setItem('carrito', JSON.stringify(this.carrito))
    },

    cargarCarrito() {
      const carritoGuardado = localStorage.getItem('carrito')
      if (carritoGuardado) {
        this.carrito = JSON.parse(carritoGuardado)
      }
    }
  },

  getters: {
    totalArticulos: (state) => {
      return state.carrito.reduce((total, item) => total + item.cantidad, 0)
    },

    totalPrecio: (state) => {
      return state.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    },

    estaEnCarrito: (state) => (id) => {
      return state.carrito.some(item => item.id === id)
    }
  }
})