<template>
    <div v-if="destination">
      <img :src="getImagePath(destination.image)"/>
      <h2>{{ destination.name }}</h2>
      <p>{{ destination.description }}</p>
  
      <h3>Experiencias</h3>
      <div>
        <div v-for="experience in destination.experiences" :key="experience.slug">
          <img :src="experience.image"/>
          <h3>{{ experience.name }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import data from '@/assets/data.json';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const destination = ref(null);
  
  const getImagePath = (imageName) => {
  return `/images/${imageName}`;
}
  
const destinationLink = computed(() => {
  return (id) => {
    return `/destination/${id}`;
  };
});
  </script>
  
  