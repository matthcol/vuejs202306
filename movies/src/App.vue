<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TheMovie from './components/TheMovie.vue'
import EditableMovie from './components/EditableMovie.vue';
import MovieMovie from './components/MovieMovie.vue';

// TypeScript types
import { type Movie } from  './components/Movie';
import MovieCollection from  './components/MovieCollection';

const title: Ref<string> = ref('a title')
const year: Ref<number> = ref(2023)
const duration: Ref<number> = ref(120)

const movie: Ref<Movie> = ref({
  title: "E.T.",
  year: 1982,
  duration: 115,
  genres: ["Adventure", "Family", "Sci-Fi"]
})

const movie2: Ref<Movie> = ref({
  title: "John Wick 4",
  year: 2023,
  duration: 160,
  genres: ["Action", "Crime", "Thriller"]
})

const movieCollection : MovieCollection = {
  movies: [
    {
      title: "Star Wars IV",
      year: 1977,
      genres: []
    },
    {
      title: "Star Wars V",
      year: 1980,
      genres: []
    },
    {
      title: "Star Wars VI",
      year: 1983,
      genres: []
    },
    {
      title: "Star Wars I",
      year: 1999,
      genres: []
    },
    {
      title: "Star Wars IX",
      year: 2019,
      genres: ["Action", "Adventure", "Fantasy"]
    },
  ]
}

</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <TheMovie :title=title :year=year :duration=duration :genres="[]"/>
      <div>
        <div>title<input v-model="title" /></div>
        <div>year<input type="number" v-model="year" /></div>
        <div>duration<input type="number" v-model="duration" /></div>
      </div>
    
      <TheMovie :title=movie.title :year=movie.year :duration=movie.duration 
          :genres=movie.genres
      />
      <div>
        <div>title<input v-model="movie.title" /></div>
        <div>year<input type="number" v-model="movie.year" /></div>
        <div>duration<input type="number" v-model="movie.duration" /></div>
      </div>

      <TheMovie title="L'Ours" :year="1988" :duration="121" :genres="[]"/>
      <TheMovie title="L'Ours 2" :year="1998" :genres="[]"/>

      <MovieMovie :movie=movie2 />
      <div>
        <div>title<input v-model="movie2.title" /></div>
        <div>year<input type="number" v-model="movie2.year" /></div>
        <div>duration<input type="number" v-model="movie2.duration" /></div>
      </div>

      <EditableMovie />
    </div>

    <div class="wrapper">
      <h1>Movies</h1>
      <button v-on:click="movieCollection.debug()">Debug</button>
      <div v-for="(movie,index) in movieCollection.movies" :key="index">
          <MovieMovie :movie="movie"/>
      </div>
    </div>
    
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
