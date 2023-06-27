<script setup>
import DropDown from './DropDown.vue';
import Quotes from './Quotes.vue';
import Player from './Player.vue';
import Loading from './Loading.vue';
import { inject, ref } from 'vue';

const loading = ref(true);
const picture = inject('picture');
const fetchedSkyImage = inject('fetchedSkyImage');

const onLoad = () => {
    loading.value = false;
};
</script>

<template>
    <section class="sky">
        <Loading v-if="loading" />
        <img :src="fetchedSkyImage" class="sky-image" @load="onLoad" />
        <DropDown />
        <Quotes />
        <Player />
        <div class="pic-details">
            <a :href="picture.pictureLink" target="_blank">Photo </a>by
            <a :href="picture.authorProfile" target="_blank"> {{ picture.authorName }} </a>
        </div>
        <div class="footer-wrapper">
            <span class="footer">Made with &#129293; by <a href="https://github.com/NanaNiki" target="_blank"
                    aria-label="NanaNiki Github profile">&nbsp;Nicol</a></span>
        </div>
    </section>
</template>

<style scoped>
.pic-details {
    position: absolute;
    bottom: 0.25em;
    right: 0.35em;
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
    z-index: 10;
}
@media screen and (max-width: 640px) {
.footer-wrapper{
    position: absolute;
    left: 0.2em;
    bottom: 0;
    width: fit-content;
}
.pic-details{
    bottom: 0.1em;
}
}
</style>