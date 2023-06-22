<script setup>
import DropDown from './DropDown.vue';
import Quotes from './Quotes.vue';
import { inject } from 'vue';
const fetchedSkyImage = inject('fetchedSkyImage');
const picture = inject('picture');
</script>

<template>
    <section class="sky">
        <img :src="fetchedSkyImage" class="sky-image"/>
        <DropDown />
        <Quotes />
        <button aria-label="Show sounds options">
            <img src="/soundsicon.svg" class="sounds-icon" alt="Sounds icon"/>
        </button>
        <div class="pic-details">
            <a :href="picture.pictureLink" target="_blank">Photo </a>by
            <a :href="picture.authorProfile" target="_blank"> {{ picture.authorName  }} </a>
            </div>
    </section>
</template>

<style scoped>
.pic-details{
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.5em;
}
.sky-image{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.sky {
    height: 100vh;
    width: 100vw;
}
.sounds-icon{
  height: 2.5em;
  padding: em;
  position: absolute;
  top: 48%;
  right: 2em;
}
</style>