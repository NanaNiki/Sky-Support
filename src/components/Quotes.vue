<script setup>
import { ref, inject, provide, onMounted, onBeforeMount } from "vue";
import quotesData from "../data/quotesData.json";
const fetchedSkyImage = inject('fetchedSkyImage');
const picture = inject('picture');
const showQuote = ref(false);
provide('showQuote', showQuote);

const quote = ref({
    text: '',
    author: ''
});

const getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotesData.length);
    quote.value.text = quotesData[randomNumber].text;
    quote.value.author = quotesData[randomNumber].author;
}

const handleClickOutside = (event) => {
    if (showQuote.value && !event.target.closest('.quotes-icon')) {
        showQuote.value = false;
    }
};
onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});
onBeforeMount(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <img src="/quotesicon.svg" class="quotes-icon" aria-label="Show random quote"
        @click="showQuote = !showQuote; getRandomQuote()" />
    <Transition name="fade" mode="out-in" appear>
        <div class="quotes-card" v-if="showQuote">
            <h3 class="quote">{{ quote.text }}</h3>
            <div class="share-quote">
                <div><a :href="`https://twitter.com/intent/tweet?hashtags=skysupportapp&text=${encodeURIComponent(`&ldquo;${quote.text}&rdquo;\n~&ensp;${quote.author}\n`)}`"
                        target="_blank" class="pin-icon" aria-label="Twitt your qoute">
                        <img src="src/assets/twitterlogo.png" class="share-logo" alt="Twitter icon" />
                    </a>
                    <a :data-pin-do="'embedPin'"
                        :href="`http://pinterest.com/pin/create/button?media=${encodeURIComponent(fetchedSkyImage)}&description=${encodeURIComponent(`&ldquo;${quote.text}&rdquo;\n~ ${quote.author}\nPhoto by ${picture.authorName}.`)}`"
                        className="twit-icon" count-layout="horizontal" target="_blank" aria-label="Pin your qoute">
                        <img src="src/assets/pinterestlogo.png" class="share-logo" alt="Pinterest icon" />
                    </a>
                </div>
                <h3 class="author">~ {{ quote.author }}</h3>
            </div>
        </div>
    </Transition>
</template>


<style scoped>
.share-logo {
    height: 2.25em;
    margin: 0 0.25em;
}

.share-logo:hover {
    filter: drop-shadow(0 0 0.5em #1c03fe);
}

.share-quote {
    display: flex;
    flex-direction: row;
    min-width: 28rem;
    width: inherit;
    justify-content: space-between;
    align-items: center;
}

.quote {
    text-align: center;
    font-size: 1.05em;
    font-weight: 350;
    letter-spacing: 0.06em;
}

.author {
    text-align: end;
    font-size: 1.05em;
    font-weight: 350;
    letter-spacing: 0.06em;
}

.quotes-icon {
    height: 2.5em;
    position: absolute;
    bottom: 4em;
    left: 2em;
}

.quotes-card {
    height: fit-content;
    width: 30em;
    background-color: #0b073f;
    position: absolute;
    bottom: 1em;
    left: 6em;
    padding: 1em 2em;
    border-radius: 1.5em;
    border: 1px solid #646cff;
}

@media screen and (max-width: 640px) {
    .quotes-icon {
        bottom: 1.75em;
        left: 1.25em;
    }

    .quotes-card {
        position: absolute;
        bottom: 5em;
        left: 1em;
        width: 85%;
        padding: 0.75em;
    }

    .share-quote {
        min-width: inherit;
        margin: auto;
    }

    .quote {
        font-size: 1em;
        margin: 0.75em auto;
    }
    .author{
        font-size: 1em;
        margin: 0.75em 0;
    }
}</style>