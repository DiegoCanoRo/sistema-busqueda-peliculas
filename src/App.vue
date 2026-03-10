<template>
  <v-app theme="dark">
    <v-app-bar color="grey-darken-4" flat border>
      <v-app-bar-title>🎬 Buscador de Películas</v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-grey-darken-4">
      <v-container fluid class="pa-6">
        <v-row>
          <v-col cols="12" md="4">
            <MovieSearch @search-movies="onSearch" />
          </v-col>

          <v-col cols="12" md="8">
            <v-sheet 
              border 
              rounded="lg" 
              class="d-flex align-center justify-center bg-transparent text-grey-darken-1"
              height="400"
            >
              Los resultados aparecerán aquí...
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import MovieSearch from './components/MovieSearch.vue'

// Función temporal para probar que los botones funcionan
const onSearch = (datos) => {
  console.log('Datos recibidos del buscador:', datos)
  alert(`Buscando: ${datos.query} (${datos.type})`)
}
</script>
