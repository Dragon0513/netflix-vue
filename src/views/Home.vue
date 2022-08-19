<template>
  <div class="container-fluid px-0">
    <movie-slider />
    <movies-slider
      v-for="(category, key) in categories"
      :key="key"
      :category="category"
      :id="key"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

import MovieSlider from "../components/Movie/MainSlider/MovieSlider.vue";
import MoviesSlider from "../components/Movie/MoviesSlider/MoviesSlider.vue";

export default defineComponent({
  components: { MovieSlider, MoviesSlider },
  setup() {
    const store = useStore();

    const categories = computed(() => {
      return store.getters["moviesModule/getCategories"];
    });

    const show = () => {
      console.log(store.getters["moviesModule/getCategories"]);
    };
    return { categories };
  },
});
</script>
