import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies/Movies.vue";
import Series from "../views/Series/Series.vue";
import VideoDetails from "@/views/Video/VideoDetails.vue";
import SearchVideo from "@/views/Search/SearchVideo.vue";

import Login from "@/views/Auth/Auth.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/browse",

  },
  {
    path: "/auth",
    component: Login,
    meta: {
      requiredUnauth: true
    }
  },
  {
    path: "/browse",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/series",
    name: "Series",
    component: Series,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/watch/:id",
    name: "VideoDetails",
    component: VideoDetails,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/search",
    name: "SearchView",
    component: SearchVideo,
    props: (route) => ({ query: route.query.q }),
    meta: {
      requiresAuth: true
    }
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, _, next) => {
//   if()
// });

export default router;
