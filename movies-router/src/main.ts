import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// To import gllobally:
// import MovieMovie from "./components/MovieMovie.vue";

createApp(App).use(router).mount("#app");
// Global comonentn: .component("MovieMovie", MovieMovie)
