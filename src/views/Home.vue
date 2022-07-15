<template>
  <div class="">
    <base-header />
    <movie-slider />
    <movies-slider />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseHeader from "../components/Layout/Header/BaseHeader.vue";
import MovieSlider from "../components/Movie/MainSlider/MovieSlider.vue";
import MoviesSlider from "../components/Movie/MoviesSlider/MoviesSlider.vue";

export default defineComponent({
  components: { BaseHeader, MovieSlider, MoviesSlider },
  setup() {
    return {};
  },
});
</script>
