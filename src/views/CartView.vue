<template>
  <div class="cart-view">
    <h2 class="mb-4">🛒 Carrito de Compras</h2>
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  name: 'CartView',
  components: {
    ShoppingCart
  }
}
</script>