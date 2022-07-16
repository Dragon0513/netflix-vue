<template>
  <div>
    <base-header :scrollPosition="scrollPosition" />
    <movie-slider />
    <movies-slider />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import BaseHeader from "../components/Layout/Header/BaseHeader.vue";
import MovieSlider from "../components/Movie/MainSlider/MovieSlider.vue";
import MoviesSlider from "../components/Movie/MoviesSlider/MoviesSlider.vue";

export default defineComponent({
  components: { BaseHeader, MovieSlider, MoviesSlider },
  setup() {
    const scrollPosition = ref<number>();

    const updateScroll = () => {
      scrollPosition.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });

    return { scrollPosition };
  },
});
</script>
