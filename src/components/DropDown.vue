<script setup>
import RandomSkyButton from './RandomSkyButton.vue';
import NearMeButton from './NearMeButton.vue';
import CloudsButton from './CloudsButton.vue';
import { ref } from 'vue';

const showDropDown = ref(false);
</script>

<template>
  <img src="/skysuplogo.svg" class="logo" alt="Sky Support logo" @click="showDropDown = !showDropDown" />
  <transition name="fade" mode="in-out" appear>
  <section class="drop-down" v-if="showDropDown">
    <div class="link-wrapper"><a href="/" class="home-link">Home</a></div>
    <CloudsButton />
    <RandomSkyButton />
    <NearMeButton />
  </section>
</transition>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}.drop-down {
  position: absolute;
  top: 6em;
  left: 0;
  width: 12em;
  height: 20em;
  justify-items: start;
  text-align: start;
}
.link-wrapper{
  margin-bottom: 0.75em;
}
.home-link {
  margin: 0.25em 1em;
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
</style>