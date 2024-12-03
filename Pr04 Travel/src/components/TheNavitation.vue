<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/brazil">Brazil</router-link></li>
            <li><router-link to="/panama">Panama</router-link></li>
            <li><router-link to="/hawaii">Hawaii</router-link></li>
            <li><router-link to="/jamaica">Jamaica</router-link></li>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/itb">ITB</router-link></li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>