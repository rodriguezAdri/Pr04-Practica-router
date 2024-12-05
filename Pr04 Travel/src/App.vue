<template>
  <div class="nav">
    <Header></Header>
  </div>
 
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';

</script>