<template>
    <div class="experience-show">
        <h2>{{ experience.name }}</h2>
        <img :src="`/images/${experience.image}`">
        <p>{{ experience.description }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import data from '@/assets/data.json';
import { useRoute } from 'vue-router';

const route = useRoute();

const destination = data.destinations.find(
    (desti) => desti.id === parseInt(route.params.id)
);

const experience = computed(() => {
    return destination.experiences.find((exp) => exp.slug === route.params.experienceSlug)
});

</script>