<script setup></script>
<template>
    <div class="loading-scrn"></div>
</template>

<style scoped>
.loading-scrn {
  background-image: url('/loadingcloud.svg');
  background-repeat: no-repeat;
  background-size: 15%;
  background-position: center;
  animation: loading 300ms ease-in-out infinite;
  z-index: 0;
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