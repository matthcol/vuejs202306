<!-- Doc props: https://vuejs.org/guide/components/props.html#props-declaration -->

<script setup lang="ts">
const props = defineProps<{
  title: string,
  year: number,
  duration?: number,
  genres: string[]
}>()

console.log(props)
</script>

<!-- 
    Template syntax: https://vuejs.org/guide/essentials/template-syntax.html 
    List (v-for): https://vuejs.org/guide/essentials/list.html#v-for-on-template
    Conditional (v-if, v-else, v-else-if): https://vuejs.org/guide/essentials/conditional.html
-->
<template>
  <div class="greetings">
    <h1 class="green">{{ title.toUpperCase() }}</h1>
    <ul>
      <li>year: {{ year < 2000 ? year % 100: year }}</li>
      <li>duration: {{ props.duration ?? 'unknown '}}mn
          (
          <span v-if="duration == null">unknown</span>
          <span v-else-if="duration < 60">short</span>
          <span v-else-if="duration < 120">medium</span>
          <span v-else>long</span>)
      </li>
      <li v-if="genres.length > 0">genres: {{ genres }}</li>
      <li>genres (join): {{ genres.join(", ") }}</li>
      <li>genres (v-for):
          <ul>
              <li v-for="genre in genres"> {{ genre }}</li>
          </ul>
      </li>
      <li>genres (v-for + index):
          <ul>
              <li v-for="(genre, index) in genres" :key="index">{{ index+1 }} - {{ genre }}</li>
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
