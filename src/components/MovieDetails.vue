<template>
  <v-dialog 
    :model-value="!!movie" 
    @update:model-value="$emit('close-details')" 
    max-width="850"
    transition="dialog-bottom-transition"
  >
    <v-card v-if="movie" class="bg-grey-darken-4 text-white rounded-xl">
      <v-row no-gutters>
        <v-col cols="12" md="5">
          <v-img 
            :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'" 
            height="100%" 
            cover
          ></v-img>
        </v-col>

        <v-col cols="12" md="7">
          <v-card-title class="text-h4 pt-6 font-weight-bold">
            {{ movie.Title }}
          </v-card-title>
          
          <v-card-subtitle class="d-flex align-center mt-2">
            <v-chip color="light-blue-darken-1" size="small" class="mr-2">{{ movie.Year }}</v-chip>
            <v-chip color="grey-darken-2" size="small" class="mr-2">{{ movie.Runtime }}</v-chip>
            <v-rating
              :model-value="parseFloat(movie.imdbRating) / 2"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <span class="text-caption ml-2 text-amber">({{ movie.imdbRating }})</span>
          </v-card-subtitle>

          <v-card-text class="mt-4">
            <p class="text-body-1 mb-4" style="line-height: 1.6;">
              {{ movie.Plot }}
            </p>

            <v-divider class="mb-4"></v-divider>

            <div class="mb-2">
              <span class="text-blue-lighten-2 font-weight-bold">Director:</span> 
              <span class="ml-2 text-grey-lighten-1">{{ movie.Director }}</span>
            </div>
            
            <div class="mb-2">
              <span class="text-blue-lighten-2 font-weight-bold">Género:</span> 
              <span class="ml-2 text-grey-lighten-1">{{ movie.Genre }}</span>
            </div>

            <div class="mb-2">
              <span class="text-blue-lighten-2 font-weight-bold">Actores:</span> 
              <span class="ml-2 text-grey-lighten-1">{{ movie.Actors }}</span>
            </div>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn 
              color="error" 
              variant="tonal" 
              @click="$emit('close-details')"
              prepend-icon="mdi-close"
            >
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup>
// prop para recibir los detalles de la película seleccionada
defineProps({
  movie: {
    type: Object,
    default: null
  }
})

// evento para avisar al padre que se cerró el diálogo de detalles
defineEmits(['close-details'])
</script>