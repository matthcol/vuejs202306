<!-- eslint-disable prettier/prettier -->
<script lang="ts">
export default {
  setup() {
    console.log("setup");
  },
  data() {
    console.log("data");
    return { count: 0, life: "is good" };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
    // TODO: do something to fire this event
  },
};
</script>

<template>
  <div>
    <p>My data: life = {{ life }}, count = {{ count }}</p>
    <button v-on:click="count++">Incr</button>
    <button @click="count--">Decr</button>
  </div>
</template>
