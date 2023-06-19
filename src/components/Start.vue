<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="bg-container"></div>
  <img src="/cloud.svg" class="cloud1" alt="cloud" />
  <img src="/cloud.svg" class="cloud2" alt="cloud" />
  <section class="start">
  <h1>Sky Support</h1>
  <h2>Welcome to Your personal Sky Support</h2>
  <h3>Space where you can get inspiration and enhance your focus</h3>
  <h3>Choose your sky:</h3>
  <div class="input-buttons-wrapper"> 
  <input placeholder="Type in location of your dream sky"/>
  <div class="button-wrapper">  
  <button>Random sky</button>
  <button>Sky near me</button>
</div>
</div>
</section>
</template>

<style scoped>
.start{
  z-index: 10;
  position: relative;
}
@keyframes floating {
  0% {
    transform: translateY(0%) translateX(0);
  }
  50% {
    transform: translateY(5%) translateX(1%);
  }
  100% {
    transform: translateY(0%) translateX(0%);
  }
} 
.cloud1 {
  height: 10em;
  width: 15em;
  position: absolute;
  bottom: 5em;
  left: 3em;
  animation: floating 3s ease-in-out infinite forwards;
}
.cloud2 {
  height: 10em;
  width: 15em;
  position: absolute;
  top: 4em;
  right: 5em;
  animation: floating 3s ease-in-out infinite forwards;
  animation-delay: 0.75s;
}
.bg-container {
  height: 40em;
  width: 100vw;
  background-image: linear-gradient(to bottom, rgba(1, 6, 46, 0.832), rgba(35, 6, 76, 0)), url("./src/assets/bgsky.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 100em;
  border-top-right-radius: 100em;
  filter: drop-shadow(1em 0 5em #051676);
  opacity: 60%;
  position: absolute;
  top: 20em;
  right: 0;
  z-index: 0;
  overflow-y: hidden;
}
.input-buttons-wrapper {
margin-top: 4em;
z-index: 20;
}
input {
  text-align: center;
  margin: 1em;
  border-radius: 8px;
  border: 1px solid transparent;
  width: 20em;
  height: 2em;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #0b073f;
  cursor: pointer;
  transition: border-color 0.25s;
}
input:hover {
  border-color: #646cff;
}
.button-wrapper {
  flex: auto;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
