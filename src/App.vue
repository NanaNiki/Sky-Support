<script setup>
import Start from './components/Start.vue'
</script>

<template>
    <a href="/">
      <img src="/skysuplogo.svg" class="logo" alt="Sky Support logo" />
    </a>
  <Start msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 2.5em;
  padding: em;
  will-change: filter;
  transition: filter 300ms;
  position: absolute;
  top: 1em;
  left: 2em;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #1c03fe);
}
</style>
