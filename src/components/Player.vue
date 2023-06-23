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
</script>

<template>
    <button aria-label="Show sounds options" @click="showPlayer = !showPlayer">
        <img src="/soundsicon.svg" class="sounds-icon" alt="Sounds icon" />
    </button>
    <Transition name="fade" mode="out-in" appear>
        <section class="show-player" v-if="showPlayer">
            <button>
                <img src="/classicicon.svg" class="classic-icon" alt="Classical music icon" />
            </button>
            <button>
                <img src="/natureicon.svg" class="nature-icon" alt="Nature sounds icon" />
            </button>
            <button>
                <img src="/rainicon.svg" class="rain-icon" alt="Rain sounds icon" />
            </button>
            <button><img src="/houseicon.svg" class="house-icon" alt="Household sounds icon" /></button>
        </section>
    </Transition>
</template>

<style scoped>
.house-icon{
    height: 2.5em;
    position: absolute;
    top: 56%;
    right: 3em;
}
.rain-icon{
    height: 2.5em;
    position: absolute;
    top: 52%;
    right: 5.25em;
}
.nature-icon{
    height: 2.5em;
    position: absolute;
    top: 45.5%;
    right: 5.25em;
}
.classic-icon {
    height: 2.5em;
    position: absolute;
    top: 41%;
    right: 3em;
}
.sounds-icon {
    height: 2.5em;
    position: absolute;
    top: 48.5%;
    right: 2em;
}
</style>