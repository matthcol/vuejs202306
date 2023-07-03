<script lang="ts">
export default {
  data() {
    return {
      title: 'Fantastic Movie',
      year: 2020,
      duration: 115
    }
  }
}
</script>

<template>
    <div class="greetings">
      <h1 class="green">{{ title }}</h1>
      <ul>
        <li>year: {{ year }}</li>
        <li>duration: {{ duration }}mn</li>
      </ul>
    </div>
    <div>
        <input v-model="title">
        <input type="number" v-model="year">
        <input type="number" v-model="duration">
    </div>
</template>