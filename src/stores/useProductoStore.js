import { defineStore } from 'pinia'

export const useProductoStore = defineStore('producto', {
  state: () => ({
    productos: [
      {
        id: 1,
        nombre: 'Laptop Gaming',
        descripcion: 'Laptop para gaming de alta gama',
        precio: 1200,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        nombre: 'Smartphone',
        descripcion: 'Teléfono inteligente última generación',
        precio: 800,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        nombre: 'Auriculares Bluetooth',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido',
        precio: 150,
        categoria: 'Audio',
        imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        nombre: 'Tablet',
        descripcion: 'Tablet para trabajo y entretenimiento',
        precio: 500,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop'
      },
      {
        id: 5,
        nombre: 'Smartwatch',
        descripcion: 'Reloj inteligente con monitor de salud',
        precio: 300,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
      }
    ]
  }),

  actions: {
    crearProducto(producto) {
      const nuevoProducto = {
        ...producto,
        id: Date.now()
      }
      this.productos.push(nuevoProducto)
    },

    actualizarProducto(id, productoActualizado) {
      const index = this.productos.findIndex(p => p.id === id)
      if (index !== -1) {
        this.productos[index] = { ...productoActualizado, id }
      }
    },

    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id)
    }
  },

  getters: {
    obtenerProductoPorId: (state) => (id) => {
      return state.productos.find(producto => producto.id === id)
    }
  }
})