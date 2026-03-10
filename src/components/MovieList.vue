<template>
<v-row>
    <v-col v-for="pelicula in peliculas" :key="pelicula.imdbID"
        cols= "12" 
        sd="6"
        md="4">
    <v-card class = "bg-grey-darken-4 h-100 rounded-lg" elevation="2">
        <v-img
          :src="pelicula.Poster !== 'N/A' ? pelicula.Poster : 'https://via.placeholder.com/300x450?text=Sin+Poster'"
          height="350"
          cover
          class="align-end"
        >
            <template v-slot:placeholder>
               <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
            </template>
        </v-img>


        <v-card-item>
          <v-card-title class="text-subtitle-1 font-weight-bold text-white">
            {{ pelicula.Title }}
          </v-card-title>
          <v-card-subtitle class="text-grey-lighten-1">
            {{ pelicula.Year }} • {{ pelicula.Type }}
          </v-card-subtitle>
        </v-card-item>

         <v-card-actions>
          <v-btn
            color="light-blue-accent-2"
            variant="text"
            class="font-weight-bold"
            @click="$emit('select-movie', pelicula.imdbID)"
          >
            Ver detalles
          </v-btn>
        </v-card-actions>

    </v-card>
        



    </v-col>
</v-row>
</template>



<script setup>
//definimos la prop que recibe el arreglo de películas
defineProps({
  peliculas: {
    type: Array,
    required: true,
    default: () => []
  }
})

//definimos el evento para avisar al padre qué película se seleccionó
defineEmits(['select-movie'])
</script>