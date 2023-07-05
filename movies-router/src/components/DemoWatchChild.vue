<script setup lang="ts">
// Article:  https://vuejsdevelopers.com/2022/06/01/ref-vs-reactive/
import { ref, computed, reactive, type Ref, watch } from "vue";
import type { Movie } from "../types/Movie";

const props = defineProps<{ movie: Movie }>();
const emit = defineEmits<{
  movieUpdateNotify: [];
  genreAdded: [genre: string];
  movieUpdated: [movie: Movie];
}>();

let newGenre: Ref<string> = ref("");
const movie1: Ref<Movie> = ref({ ...props.movie });
const movie2: Movie = reactive({
  title: "Guardians of the Galaxy Vol.3",
  year: 2023,
  duration: 150,
  genres: ["Action"],
});

const genreCount1 = computed(() => {
  return movie1.value.genres.length;
});

const genreCount2 = computed(() => {
  return movie2.genres.length;
});

const movieShortDescription = computed({
  get() {
    const durationStr = movie1.value.duration
      ? `{movie.duration}mn`
      : "unknown";
    return `${movie1.value.title} (${movie1.value.year}, ${durationStr})#${movie1.value.genres.length}`;
  },
  set(newValue) {
    // DO NOTHING
  },
});

function addGenre(this: any, movie: Movie) {
  console.log("add genre:", newGenre.value, movie);
  if (newGenre.value.length > 0) {
    movie.genres.push(newGenre.value);
    emit("genreAdded", newGenre.value);
    emit("movieUpdated", movie);
  }
}

function resetGenre() {
  newGenre.value = "";
}

watch(movie1.value.genres, (newGenres) =>
  console.log("Watcher 1 - genres has changed [new]:", newGenres)
);
watch(newGenre, (newValue, oldValue) =>
  console.log("Watcher 2 - input genre has changed:", oldValue, "->", newValue)
);
</script>

<template>
  <div class="wrapper">
    <h1>Movie Genre Editor</h1>
    <ul>
      <template v-for="(movie, index) in [movie1, movie2]" :key="index">
        <p>
          {{ movie.title }} ({{ movie.year }},
          {{ movie.duration ?? "no duration " }} mn)
        </p>
        <p>Genres: {{ movie.genres.join(",") }}</p>
      </template>
    </ul>
    <p>Short description 1: {{ movieShortDescription }}</p>
    <p>Genre count 1 (ref): {{ genreCount1 }}</p>
    <p>Genre count 2 (reactive): {{ genreCount2 }}</p>
    <div>
      <input id="genre" v-model="newGenre" />
      <button
        @click="
          addGenre(movie1);
          addGenre(movie2);
          resetGenre();
          $emit('movieUpdateNotify');
        "
      >
        Add
      </button>
    </div>
  </div>
</template>
