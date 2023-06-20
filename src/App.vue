<script setup>
import { ref, provide } from 'vue';
import Start from './components/Start.vue'
import Sky from './components/Sky.vue';
const fetchedSkyImage = ref();
const showSkyComponent = ref(false);
provide('showSkyComponent', showSkyComponent);
provide('fetchedSkyImage', fetchedSkyImage);
</script>

<template>
  <div v-if="!showSkyComponent">
    <Start />
  </div>
  <div v-if="showSkyComponent">
    <Sky />
  </div>
</template>

<style src="./style.css"></style>
