<template>
  <div class="container">
    <router-link v-for="destination in data.destinations" :key="destination.name" :to="`/destination/${destination.name}`">
      {{ destination.name }}
    </router-link>
  </div>
</template>
  
<script setup>
import data from '@/assets/data.json';

</script>
  
  