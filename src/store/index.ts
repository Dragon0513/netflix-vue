import { createStore } from "vuex";
import {moviesModule} from "./movies";
import {authModule} from "./auth/index";

export default createStore({
  // state: {},
  // mutations: {},
  // actions: {},
  // getters: {},
  modules: { moviesModule, authModule },
});
