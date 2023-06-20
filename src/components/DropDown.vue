<script setup>
import RandomSkyButton from './RandomSkyButton.vue';
import NearMeButton from './NearMeButton.vue';
</script>

<template>
  <img src="/skysuplogo.svg" class="logo" alt="Sky Support logo" />
  <section class="drop-down">
    <a href="/" class="home-link">Home</a>
    <RandomSkyButton />
    <NearMeButton />
  </section>
</template>

<style scoped>
.drop-down {
  position: absolute;
  top: 6em;
  left: 0;
  width: 12em;
  height: 20em;
  justify-items: start;
  text-align: start;
}

.home-link {
  margin-right: 1em;
  margin-left: 1em;
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
  outline: 4px auto -webkit-focus-ring-color;
}</style>