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
          <select class="form-select" id="categoria" v-model="formData.categoria" required>
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
              v-model.number="formData.precio"
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
            placeholder="https://images.unsplash.com/photo-..."
          >
          <div class="form-text">
            Usa servicios como Unsplash para imágenes realistas (opcional).
          </div>
        </div>
      </div>
    </div>

    <!-- Vista previa de la imagen -->
    <div class="mb-4">
      <label class="form-label">👁️ Vista Previa</label>
      <div class="image-preview">
        <img 
          :src="effectiveImageUrl" 
          alt="Vista previa" 
          class="img-thumbnail"
          @error="handleImageError"
          style="max-height: 200px; max-width: 100%;"
        >
      </div>
    </div>

    <div class="d-flex gap-2 justify-content-end">
      <router-link to="/productos" class="btn btn-secondary">
        ❌ Cancelar
      </router-link>
      <button type="submit" class="btn btn-primary" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
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
      loading: false
    }
  },
  computed: {
    effectiveImageUrl() {
      // Si hay imagen válida, usarla, sino usar placeholder local
      if (this.formData.imagen && this.isValidUrl(this.formData.imagen)) {
        return this.formData.imagen;
      }
      return this.getPlaceholderImage();
    }
  },
  watch: {
    producto: {
      immediate: true,
      handler(newProducto) {
        if (newProducto && this.isEditing) {
          this.formData = { ...newProducto };
          console.log('📝 Formulario cargado con producto:', this.formData);
        } else {
          // Resetear formulario para creación
          this.formData = {
            nombre: '',
            descripcion: '',
            precio: 0,
            categoria: '',
            imagen: ''
          };
          console.log('📝 Formulario en modo creación');
        }
      }
    }
  },
  methods: {
    isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    },

    getPlaceholderImage() {
      // Data URL SVG como placeholder local
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGMEYwRjAiLz48cGF0aCBkPSJNMTIwIDEyMEgxODBWMTgwSDEyMFYxMjBaIiBmaWxsPSIjQzhDOEM4Ii8+PHBhdGggZD0iTTIyMCAxMjBIMjgwVjE4MEgyMjBWMTIwWiIgZmlsbD0iI0M4QzhDOCIvPjxwYXRoIGQ9Ik0xMjAgMjAwSDE4MFYyNjBIMTIwVjIwMFoiIGZpbGw9IiNDOEM4QzgiLz48cGF0aCBkPSJNMjIwIDIwMEgyODBWMjYwSDIyMFYyMDBaIiBmaWxsPSIjQzhDOEM4Ii8+PHRleHQgeD0iMjAwIiB5PSIyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiI+SW1hZ2VuIGRlbCBQcm9kdWN0bzwvdGV4dD48L3N2Zz4=';
    },

    handleImageError(event) {
      console.log('🔄 Cargando imagen de placeholder local');
      event.target.src = this.getPlaceholderImage();
    },

    async submitForm() {
      const form = this.$el;
      
      // Validar formulario
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        console.log('❌ Formulario inválido');
        return;
      }

      this.loading = true;
      
      try {
        console.log('✅ Formulario válido, enviando datos:', this.formData);
        
        // Crear copia limpia de los datos
        const datosEnvio = {
          ...this.formData,
          precio: parseFloat(this.formData.precio) // Asegurar que sea número
        };
        
        // Emitir evento solo una vez
        this.$emit('submit', datosEnvio);
        
      } catch (error) {
        console.error('❌ Error al enviar formulario:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    console.log('🏁 ProductForm montado, isEditing:', this.isEditing);
  }
}
</script>

<style scoped>
.image-preview {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.375rem;
  border: 1px solid #dee2e6;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>