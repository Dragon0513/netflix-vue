import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies/Movies.vue";
import MovieDetails from "../views/Movies/MovieDetails.vue";
import Series from "../views/Series/Series.vue";
import SerieDetails from "../views/Series/SerieDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/browse",
  },
  {
    path: "/browse",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: MovieDetails,
  },
  {
    path: "/series",
    name: "Series",
    component: Series,
  },
  {
    path: "/series/:id",
    name: "SerieDetails",
    component: SerieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
