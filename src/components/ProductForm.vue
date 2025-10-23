<template>
  <form @submit.prevent="submitForm" class="needs-validation" novalidate>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nombre" class="form-label">📝 Nombre del Producto</label>
          <input 
            type="text" 
            class="form-control" 
            id="nombre" 
            v-model="formData.nombre"
            required
            placeholder="Ej: Laptop Gaming Pro"
          >
          <div class="invalid-feedback">
            Por favor ingresa un nombre para el producto.
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="mb-3">
          <label for="categoria" class="form-label">🏷️ Categoría</label>
          <select class="form-select" id="categoria" v-model="formData.categoria" required @change="sugerirImagen">
            <option value="">Selecciona una categoría</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Audio">Audio</option>
            <option value="Fotografía">Fotografía</option>
            <option value="Gaming">Gaming</option>
            <option value="Hogar">Hogar</option>
            <option value="Oficina">Oficina</option>
          </select>
          <div class="invalid-feedback">
            Por favor selecciona una categoría.
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="descripcion" class="form-label">📄 Descripción</label>
      <textarea 
        class="form-control" 
        id="descripcion" 
        v-model="formData.descripcion"
        required
        rows="4"
        placeholder="Describe las características y beneficios del producto..."
      ></textarea>
      <div class="invalid-feedback">
        Por favor ingresa una descripción del producto.
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="precio" class="form-label">💰 Precio ($)</label>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input 
              type="number" 
              class="form-control" 
              id="precio" 
              v-model="formData.precio"
              step="0.01"
              min="0"
              required
              placeholder="0.00"
            >
          </div>
          <div class="invalid-feedback">
            Por favor ingresa un precio válido.
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="mb-3">
          <label for="imagen" class="form-label">🖼️ URL de la Imagen</label>
          <input 
            type="url" 
            class="form-control" 
            id="imagen" 
            v-model="formData.imagen"
            required
            placeholder="https://images.unsplash.com/photo-..."
          >
          <div class="form-text">
            <small>
              <strong>Sugerencias por categoría:</strong><br>
              • Tecnología: photos de laptops, phones, tablets<br>
              • Audio: photos de auriculares, altavoces<br>
              • Gaming: photos de teclados, consolas<br>
              • Fotografía: photos de cámaras, drones
            </small>
          </div>
          <div class="invalid-feedback">
            Por favor ingresa una URL válida para la imagen.
          </div>
        </div>
      </div>
    </div>

    <!-- Vista previa de la imagen -->
    <div v-if="formData.imagen" class="mb-4">
      <label class="form-label">👁️ Vista Previa</label>
      <div class="image-preview">
        <img 
          :src="formData.imagen" 
          alt="Vista previa" 
          class="img-thumbnail"
          @error="handleImageError"
          style="max-height: 200px;"
        >
        <div v-if="!imagenCargada" class="mt-2">
          <small class="text-warning">⚠️ La imagen no se pudo cargar. Verifica la URL.</small>
        </div>
      </div>
    </div>

    <!-- Sugerencias de imágenes por categoría -->
    <div v-if="!isEditing" class="mb-4">
      <label class="form-label">💡 Imágenes Sugeridas</label>
      <div class="row g-2">
        <div class="col-4 col-md-2" v-for="(sugerencia, index) in imagenesSugeridas" :key="index">
          <div class="sugerencia-imagen" @click="seleccionarImagen(sugerencia.url)">
            <img 
              :src="sugerencia.url" 
              :alt="sugerencia.descripcion"
              class="img-thumbnail"
              style="height: 60px; object-fit: cover; cursor: pointer;"
            >
            <small class="d-block text-center">{{ sugerencia.descripcion }}</small>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex gap-2 justify-content-end">
      <router-link to="/productos" class="btn btn-secondary">
        ❌ Cancelar
      </router-link>
      <button type="submit" class="btn btn-primary">
        {{ isEditing ? '💾 Actualizar Producto' : '✅ Crear Producto' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: {
    producto: {
      type: Object,
      default: null
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        nombre: '',
        descripcion: '',
        precio: 0,
        categoria: '',
        imagen: ''
      },
      imagenCargada: true,
      imagenesSugeridas: [
        {
          url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
          descripcion: 'Laptop'
        },
        {
          url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
          descripcion: 'Smartphone'
        },
        {
          url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
          descripcion: 'Auriculares'
        },
        {
          url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
          descripcion: 'Tablet'
        },
        {
          url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
          descripcion: 'Smartwatch'
        },
        {
          url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
          descripcion: 'Cámara'
        }
      ]
    }
  },
  watch: {
    producto: {
      immediate: true,
      handler(newProducto) {
        if (newProducto && this.isEditing) {
          this.formData = { ...newProducto }
          this.imagenCargada = true
        }
      }
    }
  },
  methods: {
    submitForm() {
      const form = this.$el
      if (!form.checkValidity()) {
        form.classList.add('was-validated')
        return
      }
      
      this.$emit('submit', this.formData)
    },
    
    handleImageError(event) {
      this.imagenCargada = false
      event.target.style.display = 'none'
    },
    
    seleccionarImagen(url) {
      this.formData.imagen = url
      this.imagenCargada = true
    },
    
    sugerirImagen() {
      // Sugerir imagen basada en la categoría seleccionada
      const sugerencias = {
        'Tecnología': [
          'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop'
        ],
        'Audio': [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop'
        ],
        'Gaming': [
          'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop'
        ],
        'Fotografía': [
          'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop'
        ]
      }
      
      if (sugerencias[this.formData.categoria] && !this.isEditing) {
        this.formData.imagen = sugerencias[this.formData.categoria][0]
      }
    }
  }
}
</script>

<style scoped>
.image-preview {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.375rem;
}

.sugerencia-imagen {
  cursor: pointer;
  transition: transform 0.2s;
}

.sugerencia-imagen:hover {
  transform: scale(1.05);
}

.sugerencia-imagen small {
  font-size: 0.7rem;
  line-height: 1.2;
}

.needs-validation .form-control:invalid,
.needs-validation .form-select:invalid {
  border-color: #dc3545;
}

.was-validated .form-control:invalid,
.was-validated .form-select:invalid {
  border-color: #dc3545;
}
</style>