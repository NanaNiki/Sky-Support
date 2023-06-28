/** The code is rendering the NearMeButton component of Sky Support App, 
 * which fetches the sky image based on user's geoloaction, with use of
 * OpenCage and Unsplash API key. It also fetches the data of author of 
 * sky picture: the link to the picture, the author's name and profile 
 * link on Unsplash.
 */
<script setup>
import { inject } from 'vue';
const accessKeyImg = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const accessKeyLoc = import.meta.env.VITE_GEOCODING_ACCESS_KEY;

const showSkyComponent = inject('showSkyComponent');
const fetchedSkyImage = inject('fetchedSkyImage');
const picture = inject('picture');

const fetchNearMe = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        //turn data into country
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&language=native&key=${accessKeyLoc}`)
          .then(response => response.json())
          .then(data => {
            console.log(data.results[0].formatted);
            const userLocation = data.results[0].components.country;
            const query = `sky-${userLocation}-hd`
            fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKeyImg}`)
              .then(response => response.json())
              .then(photoData => {
                fetchedSkyImage.value = photoData.urls.full;
                picture.value.authorName = photoData.user.first_name + " " + photoData.user.last_name;
                picture.value.authorProfile = photoData.user.links.html;
                picture.value.pictureLink = photoData.links.html;
                showSkyComponent.value = true;
                console.log('Sky near you');
              })
              .catch(error => {
                console.error("Failed to fetch image:", error);
              });
          })
          .catch(error => {
            console.error("Failed to retrieve you location:", error);
          });
      },
      error => {
        console.error("Seems like we can't get this location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported bu thid browser.");
  }
};
</script>

<template>
  <button @click="fetchNearMe">Sky near me</button>
</template>