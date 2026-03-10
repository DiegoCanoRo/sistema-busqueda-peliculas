<template> 

<v-card class = "bg-grey-darken-4 pa-4 rounded-lg" elevation="4">
    <v-card-title class = "d-flex text-white align-center px-0 mb-4">

        <v-icon icon = "mdi-magnify" start color="gray-lighten-1"></v-icon>
        <span class = "text-h5 font-weight-bold ml-2">
        Buscar Película
        </span> 
    </v-card-title>

    <v-card-text class = "pa-0">
        <v-text-field 
        v-model = "query"
        label = "Título de la película"
        variant="outlined"
        density="comfortable"
        bg-color="grey-darken-3"
        class = "mb-2"
        ></v-text-field>

        <v-select 
        v-model = "tipo"
        :items="[
          { title: 'Película', value: 'pelicula' },
          { title: 'Serie', value: 'serie' },
          { title: 'Episodio', value: 'episodio' }
        ]"
        label="Tipo"
        variant="outlined"  
        density="comfortable"
        bg-color="grey-darken-3"
        class = "mb-4 mt-4"
        ></v-select>

        <v-text-field 
        v-model = "year"
        label = "Año"
        variant="outlined"
        density="comfortable"
        bg-color="grey-darken-3"
        class = "mb-4 mt-4"
        ></v-text-field>

        <v-btn
        color="light-blue-darken-1"
        block
        class="mb-2 text-white font-weight-bold"
        prepend-icon="mdi-magnify"
        @click="onSearch"
        >
        Buscar
      </v-btn>


        <v-btn
            color="red-darken-1"
            block
            class="text-white font-weight-bold"
            prepend-icon="mdi-close"    
            @click="onClear"
        >
            Limpiar
        </v-btn>


    </v-card-text>


    
</v-card>

</template>


<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search-movies', 'clear-results'])

const query = ref('matrix') // 
const tipo = ref('pelicula')
const year = ref('')

const onSearch = () => {
  if (query.value.trim()) {
    // Emitimos el objeto al componente padre (index.vue)
    emit('search-movies', {
      query: query.value,
      tipo: tipo.value,
      year: year.value
    })
  }
}

const onClear = () => {
  query.value = ''
  tipo.value = 'pelicula'
  year.value = ''
  emit('clear-results')
}
</script>