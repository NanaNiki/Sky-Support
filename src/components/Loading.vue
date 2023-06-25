<script setup></script>
<template>
    <div class="loading-scrn">
        <Transition name="fade" mode="out-in" appear>
            <h3 class="loading-msg">Embrace the eternal sky </h3>
        </Transition>
    </div>
</template>

<style scoped>
.loading-scrn {
    background-image: url('/public/loadingcloud.svg');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    margin-top: 10%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
}
.loading-msg{
    color: rgb(11, 11, 102);
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

</style> 