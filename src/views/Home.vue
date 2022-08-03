<template>
  <div class="container-fluid px-0">
    <movie-slider />
    <movies-slider />
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

import MovieSlider from "../components/Movie/MainSlider/MovieSlider.vue";
import MoviesSlider from "../components/Movie/MoviesSlider/MoviesSlider.vue";

export default defineComponent({
  components: { MovieSlider, MoviesSlider },
  setup() {
    return {};
  },
});
</script>
