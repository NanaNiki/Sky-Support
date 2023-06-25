<script setup>
import DropDown from './DropDown.vue';
import Quotes from './Quotes.vue';
import Player from './Player.vue';
import { inject } from 'vue';
const picture = inject('picture');
const fetchedSkyImage = inject('fetchedSkyImage');
</script>

<template>
    <section class="sky">
        <img :src="fetchedSkyImage" class="sky-image" />
        <DropDown />
        <Quotes />
        <Player />
        <div class="pic-details">
            <a :href="picture.pictureLink" target="_blank">Photo </a>by
            <a :href="picture.authorProfile" target="_blank"> {{ picture.authorName }} </a>
        </div>
        <span class="footer">Made with &#129293; by<a href="https://github.com/NanaNiki" target="_blank"
                aria-label="NanaNiki Github profile"> Nicol</a></span>
    </section>
</template>

<style scoped>
.pic-details {
    position: absolute;
    bottom: 0.25em;
    right: 0.25em;
    font-size: 0.5em;
    letter-spacing: 0.05em;
}

.sky-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.sky {
    height: 100vh;
    width: 100vw;
}
</style>