<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import router from "../router";
import LifeCycle from "@/components/LifeCycle.vue";
import LifeCycleSetup from "@/components/LifeCycleSetup.vue";

const route = useRoute();

const title: Ref<string | null> = ref(null);
const year: Ref<number | null> = ref(null);

console.log("Query params setup:", route.query);

const changeQueryparams = () => {
  console.log("change query params");
  router.replace({ name: "search", query: { t: "Rambo", y: 1982 } });
};
</script>
<!-- <script lang="ts">
import { ref, type Ref } from "vue";

export default {
  setup() {
    const title: Ref<string | null> = ref(null);
    const year: Ref<number | null> = ref(null);
    const changeTitle = () =>  router.push({ name: 'search', params: { y: 'E.T.' }})
  },

  created() {
    console.log("data:", this.$data);
    console.log("title:", this.title);
    console.log("year:", this.year);
    this.$watch(
      () => this.$route.query,
      (toQuery, previousQuery) => {
        console.log("Query params changed:", toQuery);
      }
    );
  },
};
</script> -->

<template>
  <div>
    <h1>Search with</h1>
    <ul>
      <li>title: {{ title ?? "No title" }}</li>
      <li>year: {{ year ?? "No year" }}</li>
    </ul>
    <button @click="changeQueryparams">Search</button>
    <h1>Lifecycle demo (classic script)</h1>
    <LifeCycle />
    <h1>Lifecycle demo (script setup)</h1>
    <LifeCycleSetup />
  </div>
</template>
