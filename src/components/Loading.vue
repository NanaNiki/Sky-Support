/** The code is rendering the Loading component of Sky Support App.
 * It displays the floating cloud icon on transparent background.
 */
<script setup></script>
<template>
    <div class="loading-scrn"></div>
</template>

<style scoped>
.loading-scrn {
  background-image: url('/images/loadingcloud.svg');
  background-repeat: no-repeat;
  background-size: 15%;
  background-position: center;
  animation: loading 2000ms ease-in-out infinite;
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
}

@keyframes loading {
  0% {
    transform:  scale(100%);
    filter: drop-shadow(0 0 1em #010126);
  }

  50% {
    transform: scale(105%);
    filter: drop-shadow(0 0 1.25em #1c03fe);
  }

  100% {
    transform: scale(100%);
    filter: drop-shadow(0 0 1em #02022c);
  }  
}

</style> 