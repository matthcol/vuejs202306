<template>
  <div>
    <h1>Movie detail view</h1>
    {{ movie.title }} ({{ movie.year }}, {{ movie.duration ?? "unknown" }})
    <!-- <MovieMovie :index="idNumber" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { Movie } from "../types/Movie";

const props = defineProps<{
  id: string;
}>();

// const idNumber = ref(Number(props.id));

const movie: Ref<Movie> = ref({
  title: "E.T " + Number(props.id),
  year: 1982,
  genres: [],
});
</script>
