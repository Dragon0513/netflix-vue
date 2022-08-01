<template>
  <div class="container-fluid px-0">
    <movie-slider />
    <movies-slider />
    <button @click="fetch" class="btn">Fetch</button>
    <button @click="fet" class="btn">Fet</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import MovieSlider from "../components/Movie/MainSlider/MovieSlider.vue";
import MoviesSlider from "../components/Movie/MoviesSlider/MoviesSlider.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { MovieSlider, MoviesSlider },
  setup() {

    // for debugging :P
    const store = useStore();

    const videos = computed(() => {
      return store.getters["moviesModule/getVideos"];
    });

    const fetch = () => {
      store.dispatch("moviesModule/fetchCategories");
      // console.log(videos.value)
    };
    const fet = () => {
      // store.dispatch('moviesModule/fetchVideos')
      console.log(store.getters["moviesModule/getCategories"]);
    };
    return { fetch, fet };
  },
});
</script>
