import { defineStore } from 'pinia'

export const useProductoStore = defineStore('producto', {
  state: () => ({
    productos: [
      {
        id: 1,
        nombre: "Samsung Galaxy S24 Ultra",
        descripcion: "Flagship con S-Pen, cámara de 200MP, Snapdragon 8 Gen 3, 12GB RAM, 512GB almacenamiento, pantalla Dynamic AMOLED 2X de 6.8 pulgadas, resistencia al agua IP68, carga rápida de 45W",
        precio: 1299.99,
        categoria: "Tecnología",
        imagen: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
        stock: 15
      },
      {
        id: 2,
        nombre: "Sony WH-1000XM5",
        descripcion: "Audífonos noise cancelling líderes en el mercado, 30 horas de batería, sonido Hi-Res, cancelación de ruido adaptativa, calidad de llamadas cristalina, control táctil, asistente de voz integrado",
        precio: 399.99,
        categoria: "Audio",
        imagen: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
        stock: 25
      },
      {
        id: 3,
        nombre: "MacBook Pro 16\" M3 Max",
        descripcion: "Laptop profesional con chip M3 Max, 48GB RAM, 1TB SSD, pantalla Liquid Retina XDR de 16.2 pulgadas, 22 horas de batería, 12 núcleos CPU y 40 núcleos GPU, ideal para creativos y desarrolladores",
        precio: 3499.99,
        categoria: "Tecnología",
        imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        stock: 8
      },
      {
        id: 4,
        nombre: "Apple Watch Series 9",
        descripcion: "Reloj inteligente con chip S9, pantalla Retina Always-On, GPS, monitor de sueño y oxígeno en sangre, resistente al agua 50m, notificaciones inteligentes, compatible con iPhone, 18 horas de batería",
        precio: 429.99,
        categoria: "Tecnología",
        imagen: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop",
        stock: 20
      }
    ]
  }),

  actions: {
    crearProducto(producto) {
      console.log('🔄 CREANDO PRODUCTO EN STORE:', producto)
      const nuevoProducto = {
        ...producto,
        id: Date.now(), // ID único
        precio: parseFloat(producto.precio),
        stock: parseInt(producto.stock) || 0
      }
      this.productos.push(nuevoProducto)
      console.log('✅ PRODUCTO CREADO. Total productos:', this.productos.length)
      return nuevoProducto
    },

    actualizarProducto(id, productoActualizado) {
      console.log('🔄 ACTUALIZANDO PRODUCTO ID:', id, 'DATOS:', productoActualizado)
      const index = this.productos.findIndex(p => p.id === id)
      if (index !== -1) {
        this.productos[index] = { 
          ...productoActualizado, 
          id,
          precio: parseFloat(productoActualizado.precio),
          stock: parseInt(productoActualizado.stock) || 0
        }
        console.log('✅ PRODUCTO ACTUALIZADO:', this.productos[index])
        return this.productos[index]
      } else {
        console.error('❌ PRODUCTO NO ENCONTRADO PARA ACTUALIZAR:', id)
        throw new Error(`Producto con ID ${id} no encontrado`)
      }
    },

    eliminarProducto(id) {
      console.log('🗑️ ELIMINANDO PRODUCTO ID:', id)
      const index = this.productos.findIndex(p => p.id === id)
      if (index !== -1) {
        const productoEliminado = this.productos.splice(index, 1)[0]
        console.log('✅ PRODUCTO ELIMINADO. Total productos:', this.productos.length)
        return productoEliminado
      } else {
        console.error('❌ PRODUCTO NO ENCONTRADO PARA ELIMINAR:', id)
        throw new Error(`Producto con ID ${id} no encontrado`)
      }
    }
  },

  getters: {
    obtenerProductoPorId: (state) => (id) => {
      const producto = state.productos.find(producto => producto.id === parseInt(id))
      console.log('🔍 BUSCANDO PRODUCTO ID:', id, 'ENCONTRADO:', producto)
      return producto
    }
  }
})