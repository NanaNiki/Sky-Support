<script setup>
import { ref, provide } from 'vue';
import Start from './components/Start.vue'
import Sky from './components/Sky.vue';
import Loading from './components/Loading.vue';

const fetchedSkyImage = ref();
const showSkyComponent = ref(false);
const loading = ref(true);
const picture = ref({
  authorName: '',
  authorProfile: '',
  pictureLink: ''
})

provide('showSkyComponent', showSkyComponent);
provide('fetchedSkyImage', fetchedSkyImage);
provide('picture', picture);
provide('loading', loading);
</script>

<template>
  <Loading v-if="loading" />
  <Start v-if="!showSkyComponent" />
  <Sky v-if="showSkyComponent" />
</template>

<style src="./style.css"></style>
