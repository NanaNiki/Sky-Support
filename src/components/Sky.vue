<script setup>
import DropDown from './DropDown.vue';
import { inject } from 'vue';
const fetchedSkyImage = inject('fetchedSkyImage');

</script>

<template>
    <section class="sky">
        <img :src="fetchedSkyImage" class="sky-image"/>
        <DropDown />
        <button>Music/Sounds</button>
        <button>Quote if the day</button>
    </section>
</template>

<style scoped>
.sky-image{
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
}
.sky {
    height: 100vh;
    width: 100vw;
}
</style>