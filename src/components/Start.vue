<script setup>
import RandomSkyButton from './RandomSkyButton.vue';
import NearMeButton from './NearMeButton.vue';
import { ref, inject } from 'vue';

const accessKeyImg = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const locationInput = ref('');
const showSkyComponent = inject('showSkyComponent');


const fetchSkyfromInput = () => {
  const query = `sky-${locationInput}`;
  fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKeyImg}`)
    .then(response => response.json())
    .then(photoData => {
        const randomIndex = Math.floor(Math.random() * photoData.results.length);
        const randomPhoto = photoData.results[randomIndex];
        const imageUrlFromInput = randomPhoto.urls.regular;
        showSkyComponent.value = true
    })
    .catch(error => {
        console.error("Failed to fetch image:", error);
    })
}
</script>
//enter button = fetchSkyfromInput & save choice
<template>
  <a href="/">
      <img src="/skysuplogo.svg" class="logo" alt="Sky Support logo" />
  </a>
  <div class="bg-container"></div>
  <img src="/cloud.svg" class="cloud1" alt="cloud" />
  <img src="/cloud.svg" class="cloud2" alt="cloud" />
  <section class="start">
  <h1>Sky Support</h1>
  <h2>Welcome to Your personal Sky Support</h2>
  <h3>Space where you can get inspiration and enhance your focus</h3>
  <h3>Choose your sky:</h3>
  <div class="input-buttons-wrapper"> 
  <input v-model="locationInput" placeholder="Type in location of your dream sky"/>
  <div class="button-wrapper">  
    <RandomSkyButton />
    <NearMeButton />
</div>
</div>
</section>
</template>

<style scoped>
.start{
  z-index: 10;
  position: relative;
}
@keyframes floating {
  0% {
    transform: translateY(0%) translateX(0);
  }
  50% {
    transform: translateY(5%) translateX(1%);
  }
  100% {
    transform: translateY(0%) translateX(0%);
  }
} 
.cloud1 {
  height: 10em;
  width: 15em;
  position: absolute;
  bottom: 5em;
  left: 3em;
  animation: floating 3s ease-in-out infinite forwards;
}
.cloud2 {
  height: 10em;
  width: 15em;
  position: absolute;
  top: 4em;
  right: 5em;
  animation: floating 3s ease-in-out infinite forwards;
  animation-delay: 0.75s;
}
.bg-container {
  height: 40em;
  width: 100vw;
  background-image: linear-gradient(to bottom, rgba(1, 6, 46, 0.832), rgba(35, 6, 76, 0)), url("./src/assets/bgsky.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 100em;
  border-top-right-radius: 100em;
  filter: drop-shadow(1em 0 5em #051676);
  opacity: 60%;
  position: absolute;
  top: 20em;
  right: 0;
  z-index: 0;
  overflow-y: hidden;
}
.input-buttons-wrapper {
margin-top: 4em;
z-index: 20;
}
input {
  text-align: center;
  margin: 1em;
  border-radius: 8px;
  border: 1px solid transparent;
  width: 20em;
  height: 2em;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #0b073f;
  cursor: pointer;
  transition: border-color 0.25s;
}
input:hover {
  border-color: #646cff;
}
.button-wrapper {
  flex: auto;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
