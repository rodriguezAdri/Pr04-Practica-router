<template>
    <div v-if="destination">
      <img :src="destination.image"/>
      <h2>{{ destination.name }}</h2>
      <p>{{ destination.description }}</p>
  
      <h3>Experiencias</h3>
      <div>
        <div v-for="experience in destination.experiences" :key="experience.id">
          <img :src="experience.image"/>
          <h3>{{ experience.name }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import data from '@/assets/data.json';
  
  const route = useRoute();
  const destination = ref(null);
  

  onMounted(() => {
    const { slug } = route.params;
    destination.value = data.destinations.find(
      (dest) => dest.slug === slug
    );
  });

  console.log(destination);

  </script>


  

  