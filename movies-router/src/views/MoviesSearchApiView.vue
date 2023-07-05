<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from "vue";
import axios from "axios";
import type { Movie } from "../types/Movie";
import MovieMovie from "@/components/MovieMovie.vue";
import { Axios } from "axios";
import { AxiosResponse } from "axios";

const apiUrl = "http://localhost:3000/movies";
const movies: Ref<Movie[]> = ref([]);
const titleSearch: Ref<string> = ref("star");

const loadMovies = () => {
  if (titleSearch.value.length < 4) return;
  console.log("GET Movies request");
  axios
    .get<Movie[]>(apiUrl, {
      params: {
        title_like: titleSearch.value,
      },
    })
    .then((response: AxiosResponse<Movie[]>) => {
      console.log("GET Movies response:", response);
      movies.value = response.data;
    })
    .catch((error) => console.log("GET Movies error:", error));
};

onMounted(loadMovies);
watch(titleSearch, loadMovies);
</script>

<template>
  <div class="wrapper">
    <h1>Movies view</h1>
    <p>Search: <input v-model="titleSearch" /></p>
    <ul>
      <div v-for="(movie, index) in movies" :key="index">
        <li>
          {{ index }} - {{ movie.id }} - {{ movie.title }} ({{ movie.year }})
        </li>
      </div>
    </ul>
  </div>
</template>
