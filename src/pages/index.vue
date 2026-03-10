<template>
  <v-container class="pa-8">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">🎬 Buscador de Películas</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <movie-search 
          @search-movies="buscarPeliculas"
          @clear-results="handleClear"
        />
      </v-col>

      <v-col cols="12" md="8">
        <loading-spinner :loading="cargando" />
        
        <movie-list 
          v-if="peliculas.length > 0"
          :peliculas="peliculas"
          @select-movie="seleccionarPelicula"
        />

        <movie-details 
          v-if="peliculaSeleccionada"
          :movie="peliculaSeleccionada"
          @close-details="peliculaSeleccionada = null"
        />

        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
        >
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MovieSearch from '../components/MovieSearch.vue'
import MovieList from '../components/MovieList.vue'
import MovieDetails from '../components/MovieDetails.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { searchMovies, getMovieDetails } from '../services/movieApi'


const peliculas = ref([])
const peliculaSeleccionada = ref(null)
const cargando = ref(false)
const error = ref('')

const buscarPeliculas = async (searchParams) => {
  cargando.value = true
  error.value = ''
  
  try {
    const response = await searchMovies(searchParams)
    if (response.Search) {
      peliculas.value = response.Search
    } else {
      peliculas.value = []
      error.value = 'No se encontraron películas'
    }
  } catch (err) {
    error.value = 'Error al buscar películas'
    console.error(err)
  } finally {
    cargando.value = false
  }
}

const seleccionarPelicula = async (imdbID) => {
  cargando.value = true
  try {
    peliculaSeleccionada.value = await getMovieDetails(imdbID)
  } catch (err) {
    error.value = 'Error al cargar detalles de la película'
    console.error(err)
  } finally {
    cargando.value = false
  }
}

const handleClear = () => {
  peliculas.value = []
  peliculaSeleccionada.value = null
  error.value = ''
}
</script>