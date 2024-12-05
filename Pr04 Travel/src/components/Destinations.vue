<template>
  <div class="destinations">
    <div v-for="destination in data.destinations" :key="destination.id">
      <router-link :to="destinationLink({destination.id})">
        <h2>{{ destination.name }}</h2>
        <img :src="getImagePath(destination.image)"/>
      </router-link>

    </div>
  </div>    
</template>

<script setup>
import data from '@/assets/data.json';

const getImagePath = (imageName) => {
  return `/images/${imageName}`;
}

const destinationLink = computed(() => {
  return (id) => {
    return `/destination/${id}`;
  };
});
</script>


<template>
  <div class="destinations">
    <div v-for="destination in data.destinations" :key="destination.id" class="destination-card">
      <router-link :to="destinationLink(destination.id)">
        <img :src="getImagePath(destination.image)" alt="Destination image" class="destination-image"/>
        <p>{{ destination.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import data from '@/assets/data.json';

// Función para obtener la ruta correcta de la imagen
const getImagePath = (imageName) => {
  return new URL(`@/assets/images/${imageName}`, import.meta.url).href;
}

// Computed para obtener el enlace de destino

</script>



<!-- <section class="Destination">

</section>

<section class="Expiriences">

</section>

// Components detall
<section class="card">

</section>

card__text -->