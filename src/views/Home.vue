<template>
  <div class="container-fluid px-0">
    <movie-slider />
    <movies-slider />
    <button @click="fetch" class="btn ">Fetch</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MovieSlider from "../components/Movie/MainSlider/MovieSlider.vue";
import MoviesSlider from "../components/Movie/MoviesSlider/MoviesSlider.vue";
import {useStore } from 'vuex';

export default defineComponent({
  components: { MovieSlider, MoviesSlider },
  setup() {
    const store = useStore();

    const fetch = () => {
      store.dispatch('moviesModule/fetchVideos')
    }
    return {fetch};
  },
});
</script>
