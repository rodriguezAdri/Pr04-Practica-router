<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
        <router-link v-for="destination in data.destinations" :key="destination.id" :to="`/destination/${destination.id}`">
          {{ destination.name }}
        </router-link>
  </nav>
</template>

<script setup>
import data from '@/assets/data.json';

</script>
