import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// To import gllobally:
// import MovieMovie from "./components/MovieMovie.vue";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
// Global comonentn: .component("MovieMovie", MovieMovie)
