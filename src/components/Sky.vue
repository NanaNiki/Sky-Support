<script setup>
import DropDown from './DropDown.vue';

</script>

<template>
    <section class="sky">
        <DropDown class="drop-down"/>
        <button>Music/Sounds</button>
        <button>Quote if the day</button>
    </section>
</template>

<style scoped>
.drop-down{
    position: absolute;
    top: 2em;
    left: 2em;
}
.sky{
    height: 100vh;
    width: 100vw;
}
</style>