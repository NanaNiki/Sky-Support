<script setup>
import { inject } from 'vue';
const accessKeyImg = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const showSkyComponent = inject('showSkyComponent');
const fetchedSkyImage = inject('fetchedSkyImage');


const fetchRandomSky = () => {
    const query = `sky-hd`
    fetch(`https://api.unsplash.com/photos/random?query=${query}orientation=landscape&client_id=${accessKeyImg}`)
        .then(response => response.json())
        .then(photoData => {
            fetchedSkyImage.value = photoData.urls.regular;
            showSkyComponent.value = true
        })
        .catch(error => {
            console.error("Failed to fetch image:", error);
        })
}
</script>

<template>
    <button @click="fetchRandomSky">Random sky</button>
</template>