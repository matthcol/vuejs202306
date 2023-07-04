<script setup lang="ts">
import { ref, type Ref } from "vue";
import MovieCollection from "../types/MovieCollection";
import MovieMovie from "../components/MovieMovie.vue";

const movieCollection: Ref<MovieCollection> = ref(
  new MovieCollection(
    ...[
      {
        title: "Star Wars IV",
        year: 1977,
        genres: [],
      },
      {
        title: "Star Wars V",
        year: 1980,
        genres: [],
      },
      {
        title: "Star Wars VI",
        year: 1983,
        genres: [],
      },
      {
        title: "Star Wars I",
        year: 1999,
        genres: [],
      },
      {
        title: "Star Wars IX",
        year: 2019,
        genres: ["Action", "Adventure", "Fantasy"],
      },
    ]
  )
);
movieCollection.value.debug();
</script>

<template>
  <div class="wrapper">
    <h1>Movies view</h1>
    <button v-on:click="movieCollection.debug">Debug</button>
    <div v-for="(movie, index) in movieCollection.movies" :key="index">
      <MovieMovie :movie="movie" :index="index" />
    </div>
  </div>
</template>
