<script setup>
import DropDown from './DropDown.vue';
import Quotes from './Quotes.vue';
import { inject } from 'vue';
const fetchedSkyImage = inject('fetchedSkyImage');

</script>

<template>
    <section class="sky">
        <img :src="fetchedSkyImage" class="sky-image"/>
        <DropDown />
        <Quotes />
        <button aria-label="Show sounds options">
            <img src="/soundsicon.svg" class="sounds-icon" alt="Sounds icon"/>
        </button>
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
.sounds-icon{
  height: 2.5em;
  padding: em;
  position: absolute;
  top: 48%;
  right: 2em;
}
</style>