<script setup>
const accessKeyImg = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const showSkyComponent = inject('showSkyComponent');


const fetchRandomSky = () => {
    const query=`sky`
    fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKeyImg}`)
    .then(response => response.json())
    .then(photoData => {
        const randomIndex = Math.floor(Math.random() * photoData.results.length);
        const randomPhoto = photoData.results[randomIndex];
        const imageUrlRandomSky = randomPhoto.urls.regular;
        // Use the photo data to set it as background Image of Sky.vue component
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