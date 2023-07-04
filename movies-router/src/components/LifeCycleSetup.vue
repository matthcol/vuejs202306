<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
    import {ref, onMounted, onUpdated, type Ref} from 'vue';
    console.log("script setup: start");
    const count: Ref<number> = ref(0);
    const life: Ref<string> = ref("is good");
    console.log("script setup: data created");
  onMounted(() => console.log("onMounted"));
  onUpdated(() => console.log("onUpdated"));
</script>

<template>
  <div>
    <p>My data: life = {{ life }}, count = {{ count }}</p>
    <button v-on:click="count++">Incr</button>
    <button @click="count--">Decr</button>
  </div>
</template>
