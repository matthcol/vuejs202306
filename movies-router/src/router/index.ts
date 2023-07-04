import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MoviesView from "../views/MoviesView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";
import MovieSearchView from "../views/MovieSearchView.vue";

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
    path: "/search",
    name: "search",
    component: MovieSearchView,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
