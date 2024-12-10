<template>
  <div class="destinations">
    <div v-for="destination in data.destinations" :key="destination.id">
      <router-link :to="`/destination/${destination.id}`">
        <h2>{{ destination.name }}</h2>
        <img :src="getImagePath(destination.image)"/>
      </router-link>
    </div>
  </div>    
</template>

<script setup>
import data from '@/assets/data.json';

// Funció que retorna el path de la imatge
const getImagePath = (imageName) => {
  return `/images/${imageName}`;
}
</script>
