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
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.sky {
    height: 100vh;
    width: 100vw;
}
</style>