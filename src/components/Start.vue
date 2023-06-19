<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>Sky Support</h1>
  <h2>Welcome to Your personal Sky Support</h2>
  <h3>Space where you can get inspiration and enhance your focus</h3>
  <h3>Choose you sky:</h3>
  <input placeholder="Type in location of your dream sky"/>
  <div>  
  <button>Random sky</button>
  <button>Sky near me</button>
</div>
</template>

<style scoped>
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
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
div {
  flex: auto;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
