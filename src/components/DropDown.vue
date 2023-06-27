<script setup>
import RandomSkyButton from './RandomSkyButton.vue';
import NearMeButton from './NearMeButton.vue';
import CloudsButton from './CloudsButton.vue';
import { ref, provide, onBeforeMount, onMounted } from 'vue';

const showDropDown = ref(false);
provide('showDropDown', showDropDown);

const handleClickOutside = (event) => {
  if (showDropDown.value && !event.target.closest('.logo')) {
showDropDown.value = false;
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
  <img src="/skysuplogo.svg" class="logo" aria-label="Show drop-down menu" @click="showDropDown = !showDropDown" />
  <Transition name="fade" mode="out-in" appear>
    <section class="drop-down" v-if="showDropDown">
      <a href="/" class="home-link">Home</a>
      <CloudsButton />
      <RandomSkyButton />
      <NearMeButton />
    </section>
  </Transition>
</template>

<style scoped>

.drop-down {
  position: absolute;
  top: 1.75em;
  left: 5em;
  width: fit-content;
  justify-items: start;
  text-align: start;
}

.home-link {
  margin: 0.25em 0.5em;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #0b073f;
  cursor: pointer;
  transition: border-color 0.25s;
}

.home-link:hover {
  border-color: #646cff;
}
.home-link:focus,
.home-link:focus-visible {
  outline: 2px auto -webkit-focus-ring-color;
}
@media screen and (max-width: 640px) {
  .drop-down{
    position: absolute;
    height: fit-content;
    top: 4.5em;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .home-link{
    padding: 0.7em;
  }
}</style>