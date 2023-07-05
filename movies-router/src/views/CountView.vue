<script setup lang="ts">
import { counterStore } from "@/stores/index";
// import useCounterStore from "@/stores/CounterStore";
// const counterStore = useCounterStore();
</script>

<template>
  <div>
    <div>Counter: {{ counterStore.count }}</div>
    <!-- <div>Double Counter: {{ counterStrore.doubleCount }}</div> -->
    <!-- <button @click="counterStrore.increment">++</button> -->
  </div>
</template>
