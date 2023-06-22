<script setup>
import { inject } from 'vue';
const accessKeyImg = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const showSkyComponent = inject('showSkyComponent');
const fetchedSkyImage = inject('fetchedSkyImage');
const picture = inject('picture');


const fetchRandomSky = () => {
    fetch(`https://api.unsplash.com/photos/random?collections=181779&orientation=landscape&count=1&client_id=${accessKeyImg}`)
        .then(response => response.json())
        .then(photoData => {
            fetchedSkyImage.value = photoData[0].urls.full;
            picture.value.authorName = photoData[0].user.first_name + " " + photoData[0].user.last_name;
            picture.value.authorProfile  = photoData[0].user.links.html;
            picture.value.pictureLink  = photoData[0].links.html;
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