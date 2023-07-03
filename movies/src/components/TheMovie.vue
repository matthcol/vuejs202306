<script setup lang="ts">
const props = defineProps<{
  title: string,
  year: number,
  duration: number
}>()

console.log(props)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <ul>
      <li>year: {{ year }}</li>
      <li>duration: {{ props.duration }}mn</li>
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
