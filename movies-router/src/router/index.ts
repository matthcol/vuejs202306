import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MoviesView from "../views/MoviesView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";
// import MovieSearchView from "../views/MovieSearchView.vue";
import MoviesSearchApiView from "../views/MoviesSearchApiView.vue";
import DemoWatchView from "../views/DemoWatchView.vue";
import CountView from "@/views/CountView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "movies",
    component: MoviesView,
  },
  {
    path: "/movie-detail/:id(\\d+)",
    name: "movie_detail",
    props: true,
    component: MovieDetailView,
  },
  {
    path: "/movie-search",
    name: "movie_search",
    component: MoviesSearchApiView,
  },
  {
    path: "/people",
    name: "people",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PeopleView.vue"),
  },
  {
    path: "/demo-watch",
    name: "demo_watch",
    component: DemoWatchView,
  },
  {
    path: "/count",
    name: "count",
    component: CountView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
