<script setup>
import { ref } from 'vue';
import Start from './components/Start.vue'
import Sky from './components/Sky.vue';

const showSkyComponent = ref(false);
provide('showSkyComponent', showSkyComponent);
</script>

<template>
  <div v-if="!showSkyComponent">
    <Start />
  </div>
  <div v-if="showSkyComponent">
    <Sky/>
  </div>
</template>

<style src="./style.css">
</style>
