import { defineStore } from 'pinia'

export const useProductoStore = defineStore('producto', {
  state: () => ({
    productos: [
      {
        id: 1,
        nombre: 'Laptop Gaming',
        descripcion: 'Laptop para gaming de alta gama con RTX 4080, 32GB RAM y SSD 1TB',
        precio: 1200,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        nombre: 'Smartphone',
        descripcion: 'Teléfono inteligente última generación con cámara 108MP y 5G',
        precio: 800,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        nombre: 'Auriculares Bluetooth',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido activa y 30h de batería',
        precio: 150,
        categoria: 'Audio',
        imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        nombre: 'Tablet',
        descripcion: 'Tablet para trabajo y entretenimiento con pantalla 10.5" y stylus incluido',
        precio: 500,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop'
      },
      {
        id: 5,
        nombre: 'Smartwatch',
        descripcion: 'Reloj inteligente con monitor de salud, GPS y resistencia al agua',
        precio: 300,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
      },
      {
        id: 6,
        nombre: 'Cámara Digital',
        descripcion: 'Cámara profesional 4K con lente intercambiable y estabilización de imagen',
        precio: 950,
        categoria: 'Fotografía',
        imagen: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop'
      },
      {
        id: 7,
        nombre: 'Teclado Mecánico',
        descripcion: 'Teclado gaming mecánico RGB con switches azules y reposamuñecas',
        precio: 120,
        categoria: 'Gaming',
        imagen: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop'
      },
      {
        id: 8,
        nombre: 'Monitor 4K',
        descripcion: 'Monitor ultra HD 32 pulgadas con tasa de refresco 144Hz y HDR',
        precio: 450,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop'
      },
      {
        id: 9,
        nombre: 'Consola Gaming',
        descripcion: 'Consola de última generación con 1TB SSD y mando inalámbrico',
        precio: 499,
        categoria: 'Gaming',
        imagen: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop'
      },
      {
        id: 10,
        nombre: 'Altavoz Bluetooth',
        descripcion: 'Altavoz portátil con sonido surround y resistencia al agua IPX7',
        precio: 89,
        categoria: 'Audio',
        imagen: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop'
      },
      {
        id: 11,
        nombre: 'Drone Profesional',
        descripcion: 'Drone con cámara 4K, GPS y tiempo de vuelo de 30 minutos',
        precio: 799,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop'
      },
      {
        id: 12,
        nombre: 'Impresora 3D',
        descripcion: 'Impresora 3D de resina con alta precisión y volumen de impresión 200x200x200mm',
        precio: 350,
        categoria: 'Tecnología',
        imagen: 'https://images.unsplash.com/photo-1581093458791-8a6c6bc30ba2?w=400&h=300&fit=crop'
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
    },
    
    productosPorCategoria: (state) => (categoria) => {
      return state.productos.filter(producto => producto.categoria === categoria)
    }
  }
})