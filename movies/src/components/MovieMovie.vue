<script setup lang="ts">
import { type Movie } from  './Movie';

const props = defineProps<{
    movie: Movie
}>()

</script>

<template>
    <div class="greetings">
      <h1 class="green">{{ movie.title.toUpperCase() }}</h1>
      <ul>
        <li>year: {{ movie.year < 2000 ? movie.year % 100: movie.year }}</li>
        <li>duration: {{ movie.duration ?? 'unknown '}}mn
            (
            <span v-if="movie.duration == null">unknown</span>
            <span v-else-if="movie.duration < 60">short</span>
            <span v-else-if="movie.duration < 120">medium</span>
            <span v-else>long</span>)
        </li>
        <li v-if="movie.genres.length > 0">genres: {{ movie.genres }}</li>
        <li>genres (join): {{ movie.genres.join(", ") }}</li>
        <li>genres (v-for):
            <ul>
                <li v-for="genre in movie.genres"> {{ genre }}</li>
            </ul>
        </li>
        <li>genres (v-for + index):
            <ul>
                <li v-for="(genre, index) in movie.genres" :key="index">{{ index+1 }} - {{ genre }}</li>
            </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>
  
