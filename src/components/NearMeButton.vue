<script setup>
const accessKeyImg = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const accessKeyLoc = import.meta.env.VITE_GEOCODING_ACCESS_KEY;
const showSkyComponent = inject('showSkyComponent');

const fetchNearMe = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        //turn data into country
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${accessKeyLoc}`)
        .then(response => response.json())
        .then(data => {
          const country = data.results[0].components.country;
          const query=`sky-${country}`

          fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKeyImg}`)
              .then(response => response.json())
              .then(photoData => {
                const randomIndex = Math.floor(Math.random() * photoData.results.length);
                const randomPhoto = photoData.results[randomIndex];
                const imageUrlNearMe = randomPhoto.urls.regular;
                // Use the photo data to set it as background Image of Sky.vue component
                showSkyComponent.value = true
            })
              .catch(error => {
                console.error("Failed to fetch image:", error);
              });
        })
        .catch(error => {
            console.error("Failed to retrieve country:", error);
          });
        })  
.catch(error => {
  console.error("Seems like we can't get this location:", error);
});
  } else {
    console.error("Geolocation is not supported bu thid browser.");
  }
}
</script>

<template>
    <button @click="fetchNearMe">Sky near me</button>
</template>