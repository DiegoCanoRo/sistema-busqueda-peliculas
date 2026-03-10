<template>
  <v-app theme="dark">
    <v-app-bar color="grey-darken-4" flat border>
      <v-app-bar-title>🎬 Buscador de Películas</v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-grey-darken-4">
      <v-container fluid class="pa-6">
        <v-row>
          <v-col cols="12" md="4">
            <MovieSearch @search-movies="buscarPeliculas" />
          </v-col>

          <v-col cols="12" md="8">
            <LoadingSpinner :loading="cargando" />

            <MovieList 
              v-if="peliculas && peliculas.length > 0" 
              :peliculas="peliculas" 
              @select-movie="seleccionarPelicula" 
            />

            <v-sheet 
              v-else-if="!cargando"
              border 
              rounded="lg" 
              class="d-flex align-center justify-center bg-transparent text-grey-darken-1"
              height="400"
            >
              <div class="text-center">
                <v-icon icon="mdi-movie-search" size="large" class="mb-2"></v-icon>
                <p>{{ error || 'Los resultados aparecerán aquí...' }}</p>
              </div>
            </v-sheet>

            <MovieDetails 
              v-if="peliculaSeleccionada" 
              :movie="peliculaSeleccionada" 
              @close-details="peliculaSeleccionada = null" 
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import MovieSearch from './components/MovieSearch.vue'
import MovieList from './components/MovieList.vue'
import MovieDetails from './components/MovieDetails.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { searchMovies, getMovieDetails } from './services/movieApi'

const peliculas = ref([])
const peliculaSeleccionada = ref(null)
const cargando = ref(false)
const error = ref('')

// Lógica de búsqueda
const buscarPeliculas = async (parametros) => {
  cargando.value = true
  error.value = ''
  
  try {
    const data = await searchMovies(parametros)
    if (data && data.Response === 'True') {
      peliculas.value = data.Search
    } else {
      peliculas.value = []
      error.value = data.Error || 'No se encontraron resultados para tu búsqueda.'
    }
  } catch (err) {
    error.value = 'Hubo un error al conectar con el servidor.'
    console.error('Error en búsqueda:', err)
  } finally {
    cargando.value = false
  }
}

// Lógica de detalles
const seleccionarPelicula = async (id) => {
  cargando.value = true
  try {
    const data = await getMovieDetails(id)
    peliculaSeleccionada.value = data
  } catch (err) {
    error.value = 'No se pudieron cargar los detalles.'
    console.error('Error en detalles:', err)
  } finally {
    cargando.value = false
  }
}
</script>