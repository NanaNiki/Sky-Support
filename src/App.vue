<script setup>
import Start from './components/Start.vue'
</script>

<template>
  <div>
    <a href="/">
      <img src="/skysuplogo.svg" class="logo" alt="Sky Support logo" />
    </a>
  </div>
  <Start msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 3em;
  padding: 1em;
  will-change: filter;
  transition: filter 300ms;
  position: absolute;
  top: 1em;
  left: 2em;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #4ca9fbaa);
}
</style>
