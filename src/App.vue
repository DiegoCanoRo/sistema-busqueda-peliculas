<template>
  <v-app theme="dark">
    <v-app-bar color="grey-darken-4" flat border>
      <v-app-bar-title>🎬 Buscador de Películas</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text" class="mr-2">Inicio</v-btn>
      <v-btn to="/about" variant="tonal" color="blue-lighten-2">Acerca de</v-btn>
    </v-app-bar>

    <v-main class="bg-grey-darken-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
</script>