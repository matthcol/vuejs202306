<script setup lang="ts">
// Article:  https://vuejsdevelopers.com/2022/06/01/ref-vs-reactive/
import { ref, computed, reactive, type Ref, watch } from "vue";
import type { Movie } from "../types/Movie";
import MovieCollection from "../types/MovieCollection";
import DemoWatchChild from "../components/DemoWatchChild.vue";

const movieCollection: Ref<MovieCollection> = ref(
  new MovieCollection(
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
    }
  )
);
const callBackUpdateMovieNotity = () =>
  console.log("Parent: one movie has been updated");
const callBackGenreAdded = (genre: string) =>
  console.log(`Parent: genre added [${genre}]`);
const callBackMovieUpdated = (movie: Movie) =>
  console.log("Parent: movie updated: ", movie);
</script>

<template>
  <div class="wrapper">
    <h1>Demo Watch/Emit</h1>
    <ul>
      <template v-for="(movie, index) in movieCollection.movies" :key="index">
        <p>
          {{ movie.title }} ({{ movie.year }},
          {{ movie.duration ?? "no duration " }} mn):
          {{ movie.genres?.join(",") }}
        </p>
      </template>
    </ul>
    <DemoWatchChild
      :movie="movieCollection.movies[0]"
      @movie-update-notify="callBackUpdateMovieNotity"
      @genre-added="callBackGenreAdded"
      @movie-updated="callBackMovieUpdated"
    />
  </div>
</template>
