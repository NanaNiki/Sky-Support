/** This component is conditionally rendering either home page of the 
 * Sky Support app or the Sky component based on users actions.
 * The code is setting up reactive variables using:
 * 'ref' - creates a reference to an element or a component in Vue, 
 * allowing you to access and manipulate its properties or methods
 * 'provide' - used in the parent component to provide data or methods 
 * that can be accessed by its child components using the 'inject' feature
 * 'v-if' - conditionally renders an element or component based on a given expression
 */ 
<script setup>
import { ref, provide } from 'vue';
import Start from './components/Start.vue'
import Sky from './components/Sky.vue';

const fetchedSkyImage = ref();
const showSkyComponent = ref(false);
const picture = ref({
  authorName: '',
  authorProfile: '',
  pictureLink: ''
})

provide('showSkyComponent', showSkyComponent);
provide('fetchedSkyImage', fetchedSkyImage);
provide('picture', picture);
</script>

<template>
  <Start v-if="!showSkyComponent" />
  <Sky v-if="showSkyComponent" />
</template>

<style src="./style.css"></style>
