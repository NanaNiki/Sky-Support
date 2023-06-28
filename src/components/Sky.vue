/** The code is rendering the Sky component of Sky Support App, 
 * with fetched sky image setas background, three buttons displaying 
 * the drop down menu, player options and quote generator. When rendering
 * the image exceeds the set time, the loading element is being shown. 
 * The credits of the rendered picture are displayed in right bottom corner. 
 * Vue context:
 * 'watch' - allows to watch for changes in a specific data property or 
 * computed property and perform actions accordingly, the watch() take two
 * arguments: I. the func() that returns the value to watch, and II. the 
 * callback func() that gets executed when the watched value changes
 * 'v-show' - directive that conditionally shows or hides an element 
 * based on a given expression
 * '@load' - event listener that triggers when an element or component 
 * has finished loading
 * ':href' or ':src' - shorthand syntax for binding the attribute of an
 * element or component to a data property or expression, making it 
 * dynamic and reactive to changes in the data.
 */
<script setup>
import DropDown from './DropDown.vue';
import Quotes from './Quotes.vue';
import Player from './Player.vue';
import Loading from './Loading.vue';
import { inject, ref, watch } from 'vue';
const loading = ref(true);
const picture = inject('picture');
const fetchedSkyImage = inject('fetchedSkyImage');
const loadingTimeout = ref(null);

const onLoad = () => {
    clearTimeout(loadingTimeout.value);
    loading.value = false;
};

watch(
    () => fetchedSkyImage.value,
    (newValue, oldValue) => {
        loading.value = false;
        loadingTimeout.value = setTimeout(() => {
            loading.value = true;
        }, 1000)

    }
)
</script>

<template>
    <section class="sky">
        <Loading v-show="loading" />
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
    z-index: 0;
}

@media screen and (max-width: 640px) {
    .footer-wrapper {
        position: absolute;
        left: 0.2em;
        bottom: 0;
        width: fit-content;
    }

    .pic-details {
        bottom: 0.1em;
    }
}
</style>