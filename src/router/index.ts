import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies/Movies.vue";
import Series from "../views/Series/Series.vue";

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
    path: "/series",
    name: "Series",
    component: Series,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
