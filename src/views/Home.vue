<template>
  <base-header />
  <movie-slider />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseHeader from "../components/Layout/Header/BaseHeader.vue";
import MovieSlider from "../components/Movie/MovieSlider.vue";

export default defineComponent({
  components: { BaseHeader, MovieSlider },
  setup() {
    return {};
  },
});
</script>
