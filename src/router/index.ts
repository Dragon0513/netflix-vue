import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies/Movies.vue";
import Series from "../views/Series/Series.vue";
import VideoDetails from "@/views/Video/VideoDetails.vue";

import Login from "@/views/Auth/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/browse",
  },
  {
    path: "/login",
    component: Login,
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
  {
    path: "/watch/:id",
    name: "VideoDetails",
    component: VideoDetails,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
