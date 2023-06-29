/** The code is rendering the Player component of Sky Support App, 
 * with plays sounds based on user's preference.
 * Vue context:
 * 'v-for' - directive used to iterate over an array or an object and 
 * render a template block for each item, allows to dynamically generate 
 * content based on the data in component `v-for="item in items"`
 * 'v-else' - directive used in conjunction with v-if or v-show directives 
 * to render or display different content based on a condition
 */
<script setup>
import { ref } from 'vue';
const showPlayer = ref(false);
const videos = ref([
    {
        id: 'classic',
        src: 'https://www.youtube-nocookie.com/embed/_WEQl1QKJn8?&modestbranding=1&rel=0&loop=1&controls=0&autoplay=1',
        playing: false,
        title: 'Ottorino Respighi Violin & Piano | Instrumental Classical Music | Recherge Exciting Focus Mood'
    },
    {
        id: 'nature',
        src: 'https://www.youtube-nocookie.com/embed/Qm846KdZN_c?&modestbranding=1&rel=0&loop=1&controls=0&autoplay=1',
        playing: false,
        title: 'Forest Birdsong - Relaxing Nature Sounds - Birds Chirping - REALTIME - NO LOOP - 2 Hours - HD 1080p'
    },
    {
        id: 'rain',
        src: 'https://www.youtube-nocookie.com/embed/gVKEM4K8J8A?&modestbranding=1&rel=0&loop=1&controls=0&autoplay=1',
        playing: false,
        title: 'Heavy Thunderstorm Sounds | Relaxing Rain, Thunder & Lightning Ambience for Sleep | HD Nature Video'
    },
    {
        id: 'house',
        src: 'https://www.youtube-nocookie.com/embed/3RGEo2Kohb8?&start=207&modestbranding=0&rel=0&loop=1&controls=0&autoplay=1',
        playing: false,
        title: '4 Hours of Asian Mum to Help You Focus on Practising/Studying/Working'
    }
])

const pauseVideo = (video) => {
    video.playing = false;
}
const playVideo = (video) => {
    video.playing = true;
};
</script>

<template>
    <img src="/images/soundsicon.svg" class="sounds-icon" aria-label="Show sounds options"
        @click="showPlayer = !showPlayer" />
    <Transition name="fade" mode="out-in" appear>
        <section class="show-player" v-show="showPlayer">
            <div v-for="video in videos" :key="video.id">
                <template v-if="video.playing">
                    <button id="pause" @click="pauseVideo(video)">
                        <img src="/images/stopicon.svg" :class="`${video.id}-icon`" />
                    </button>
                </template>
                <template v-else>
                    <button id="play" @click="playVideo(video); console.log(`${video.title}`)">
                        <img :src="`/images/${video.id}icon.svg`" :class="`${video.id}-icon`"
                            :alt="`Play ${video.id} music`" />
                    </button>
                </template>
                <iframe v-if="video.playing" ref="youtubePlayer" class="yt-player" :src="video.src"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </section>
    </Transition>
</template>

<style scoped>
.yt-player {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    width: 200px;
    height: 200px;
    border-radius: 2em;
    border-color: #646cff;
    opacity: 70%;
}

.house-icon {
    height: 2.5em;
    position: absolute;
    top: 56%;
    right: 2.75em;
}

.rain-icon {
    height: 2.5em;
    position: absolute;
    top: 52%;
    right: 5.5em;
}

.nature-icon {
    height: 2.5em;
    position: absolute;
    top: 45.5%;
    right: 5.5em;
}

.classic-icon {
    height: 2.5em;
    position: absolute;
    top: 41%;
    right: 2.75em;
}

.sounds-icon {
    height: 2.5em;
    position: absolute;
    top: 48.5%;
    right: 2em;
}

@media screen and (max-width: 640px) {
    .sounds-icon {
        right: 1.25em;
    }
}
</style>