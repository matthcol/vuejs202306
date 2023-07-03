<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TheMovie from './components/TheMovie.vue'
import TheWelcome from './components/TheWelcome.vue'
import EditableMovie from './components/EditableMovie.vue';

const title: Ref<string> = ref('a title')
const year: Ref<number> = ref(2023)
const duration: Ref<number> = ref(120)

const movie = ref({
  title: "E.T.",
  year: 1982,
  duration: 115
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <TheMovie :title=title :year=year :duration=duration />
      <div>
        <div>title<input v-model="title" /></div>
        <div>year<input type="number" v-model="year" /></div>
        <div>duration<input type="number" v-model="duration" /></div>
      </div>
    
      <TheMovie :title=movie.title :year=movie.year :duration=movie.duration />
      <div>
        <div>title<input v-model="movie.title" /></div>
        <div>year<input type="number" v-model="movie.year" /></div>
        <div>duration<input type="number" v-model="movie.duration" /></div>
      </div>

      <TheMovie title="L'Ours" :year="1988" :duration="121" />

      <EditableMovie />
    </div>
    
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
