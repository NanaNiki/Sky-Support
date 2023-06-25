<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
const showPlayer = ref(false);

const handleClickOutside = (event) => {
    if (showPlayer.value && !event.target.closest('.sounds-icon')) {
        showPlayer.value = false;
    }
};
onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});
onBeforeMount(() => {
    window.removeEventListener('click', handleClickOutside);
});

const playAudio = (audioElement) => {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
};

</script>

<template>
    <button aria-label="Show sounds options" @click="showPlayer = !showPlayer">
        <img src="/soundsicon.svg" class="sounds-icon" alt="Sounds icon" />
    </button>
    <Transition name="fade" mode="out-in" appear>
        <section class="show-player" v-show="showPlayer">
            <button @click="playAudio($event.target.nextElementSibling)">
                <img src="/classicicon.svg" class="classic-icon" alt="Classical music icon" />
                <audio controls>
                    <source
                        src="https://dl.dropbox.com/s/9n00wvpqr9kycyl/Ottorino%20Respighi%20Violin%20%26%20Piano%20_%20Instrumental%20Classical%20Music%20_%20Recherge%20Exciting%20Focus%20Mood.mp3"
                        type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </button>
            <button @click="playAudio($event.target.nextElementSibling)">
                <img src="/natureicon.svg" class="nature-icon" alt="Nature sounds icon" />
                <audio
                    src="https://dl.dropbox.com/s/ce8fgl99lisqwyo/Forest%20Birdsong%20-%20Relaxing%20Nature%20Sounds%20-%20Birds%20Chirping%20-%20REALTIME%20-%20NO%20LOOP%20-%202%20Hours%20-%20HD%201080p.mp3"
                    type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </button>
            <button @click="playAudio($event.target.nextElementSibling)">
                <img src="/rainicon.svg" class="rain-icon" alt="Rain sounds icon" />
                <audio
                    src="https://dl.dropbox.com/s/dz9ejr48p6jzvo0/Heavy%20Thunderstorm%20Sounds%20_%20Relaxing%20Rain%2C%20Thunder%20%26%20Lightning%20Ambience%20for%20Sleep%20_%20HD%20Nature%20Video.mp3"
                    type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </button>
            <button @click="playAudio($event.target.nextElementSibling)">
                <img src="/houseicon.svg" class="house-icon" alt="Household sounds icon" />
                <audio
                    src="https://dl.dropbox.com/s/p2ol8eugdxt9x08/4%20Hours%20of%20Asian%20Mum%20to%20Help%20You%20Focus%20on%20Practising-Studying-Working%20%28mp3cut.net%29.mp3"
                    type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </button>
        </section>
    </Transition>
</template>

<style scoped>
.youtube {
    position: absolute;
    bottom: 1em;
    right: 0em;
    width: 20%;
    height: 20%;
    border-radius: 2em;
    border-color: #646cff;
}

.spotify {
    position: absolute;
    top: 0.25em;
    right: 0em;
    width: 22%;
    height: 10%;
    border-radius: 2em;
    border-color: #646cff;
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
}</style>