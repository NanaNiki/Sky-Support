<script setup>
import { ref, inject } from "vue";
import quotesData from "../data/quotesData.json";
const fetchedSkyImage = inject('fetchedSkyImage');
const show = ref(false);
const quote = ref({
    text: '',
    author: ''
});

const getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotesData.length);
    quote.value.text = quotesData[randomNumber].text;
    quote.value.author = quotesData[randomNumber].author;
}

</script>

<template>
    <button aria-label="Show random quote" @click="show = !show; getRandomQuote()">
        <img src="/quotesicon.svg" class="quotes-icon" alt="Quotes icon" />
    </button>
    <Transition name="fade" mode="out-in" appear>
        <div class="quotes-card" v-if="show">
            <h3 class="quote">{{ quote.text }}</h3>
            <div class="share-quote">
                <a :href="`https://twitter.com/intent/tweet?hashtags=skysupportapp&text=${encodeURIComponent('&ldquo;' + quote.text + '&rdquo;' + '\n' + '~' + '&ensp;' + quote.author + '\n')}`"
                    target="_blank" class="pin-icon">Twitit
                </a>
                <a :data-pin-do="'embedPin'"
                    :href="`http://pinterest.com/pin/create/button?media=${encodeURIComponent(fetchedSkyImage)}&description=${encodeURIComponent('&ldquo;' + quote.text + '&rdquo;' + '\n' + '~' + '&ensp;' + quote.author)}`"
                    className="twit-icon" count-layout="horizontal" target="_blank">
                    Pinit
                </a>
                <h5 class="author">~ {{ quote.author }}</h5>
            </div>
        </div>
    </Transition>
</template>


<style scoped>
.share-quote {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
}

.quote {
    text-align: start;
}

.author {
    text-align: end;
}

.quotes-icon {
    height: 2.5em;
    padding: em;
    position: absolute;
    bottom: 4em;
    left: 2em;
}

.quotes-card {
    min-height: 7.5em;
    min-width: 30em;
    width: fit-content;
    height: fit-content;
    background-color: #0b073f;
    position: absolute;
    bottom: 1em;
    left: 6em;
    padding: 0 2em;
    border-radius: 10px;
    border: 1px solid #646cff;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
}
</style>