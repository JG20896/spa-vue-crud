// Persistencia manual para Pinia
export const persistencePlugin = ({ store }) => {
  // Cargar estado del localStorage al inicializar
  const stored = localStorage.getItem(`pinia-${store.$id}`)
  if (stored) {
    try {
      const parsedData = JSON.parse(stored)
      store.$patch(parsedData)
      console.log(`✅ Estado cargado para ${store.$id}:`, parsedData)
    } catch (error) {
      console.error(`❌ Error cargando estado para ${store.$id}:`, error)
      // Si hay error al cargar, cargar productos de ejemplo
      if (store.$id === 'producto' && store.cargarProductosEjemplo) {
        store.cargarProductosEjemplo()
      }
    }
  } else {
    // Si no hay datos guardados, cargar productos de ejemplo para la store de productos
    if (store.$id === 'producto' && store.cargarProductosEjemplo) {
      console.log('🔰 No hay datos guardados, cargando productos de ejemplo')
      store.cargarProductosEjemplo()
    }
  }

  // Guardar estado en localStorage cuando cambie
  store.$subscribe((mutation, state) => {
    try {
      localStorage.setItem(`pinia-${store.$id}`, JSON.stringify(state))
      console.log(`💾 Estado guardado para ${store.$id}:`, state)
    } catch (error) {
      console.error(`❌ Error guardando estado para ${store.$id}:`, error)
    }
  })
}

// Función auxiliar para limpiar almacenamiento específico
export const limpiarAlmacenamiento = (storeId) => {
  try {
    localStorage.removeItem(`pinia-${storeId}`)
    console.log(`🧹 Almacenamiento limpiado para: ${storeId}`)
  } catch (error) {
    console.error(`❌ Error limpiando almacenamiento para ${storeId}:`, error)
  }
}

// Función para exportar datos
export const exportarDatos = (storeId) => {
  try {
    const datos = localStorage.getItem(`pinia-${storeId}`)
    return datos ? JSON.parse(datos) : null
  } catch (error) {
    console.error(`❌ Error exportando datos para ${storeId}:`, error)
    return null
  }
}

// Función para importar datos
export const importarDatos = (storeId, datos) => {
  try {
    localStorage.setItem(`pinia-${storeId}`, JSON.stringify(datos))
    console.log(`📥 Datos importados para ${storeId}:`, datos)
    return true
  } catch (error) {
    console.error(`❌ Error importando datos para ${storeId}:`, error)
    return false
  }
}