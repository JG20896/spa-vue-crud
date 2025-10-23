<template>
  <form @submit.prevent="submitForm" class="needs-validation" novalidate>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre del Producto</label>
      <input 
        type="text" 
        class="form-control" 
        id="nombre" 
        v-model="formData.nombre"
        required
      >
      <div class="invalid-feedback">
        Por favor ingresa un nombre para el producto.
      </div>
    </div>

    <div class="mb-3">
      <label for="descripcion" class="form-label">Descripción</label>
      <textarea 
        class="form-control" 
        id="descripcion" 
        rows="3"
        v-model="formData.descripcion"
        required
      ></textarea>
      <div class="invalid-feedback">
        Por favor ingresa una descripción.
      </div>
    </div>

    <div class="mb-3">
      <label for="precio" class="form-label">Precio</label>
      <input 
        type="number" 
        class="form-control" 
        id="precio" 
        step="0.01"
        v-model="formData.precio"
        required
      >
      <div class="invalid-feedback">
        Por favor ingresa un precio válido.
      </div>
    </div>

    <div class="mb-3">
      <label for="categoria" class="form-label">Categoría</label>
      <input 
        type="text" 
        class="form-control" 
        id="categoria" 
        v-model="formData.categoria"
        required
      >
      <div class="invalid-feedback">
        Por favor ingresa una categoría.
      </div>
    </div>

    <div class="mb-3">
      <label for="imagen" class="form-label">URL de la Imagen</label>
      <input 
        type="url" 
        class="form-control" 
        id="imagen" 
        v-model="formData.imagen"
        required
      >
      <div class="invalid-feedback">
        Por favor ingresa una URL válida para la imagen.
      </div>
    </div>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <router-link to="/productos" class="btn btn-secondary me-md-2">
        Cancelar
      </router-link>
      <button type="submit" class="btn btn-primary">
        {{ isEditing ? 'Actualizar' : 'Crear' }} Producto
      </button>
    </div>
  </form>
</template>

<script>
export default {
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
        imagen: 'https://via.placeholder.com/200'
      }
    }
  },
  watch: {
    producto: {
      handler(newProducto) {
        if (newProducto && this.isEditing) {
          this.formData = { ...newProducto }
        }
      },
      immediate: true
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
    }
  }
}
</script>