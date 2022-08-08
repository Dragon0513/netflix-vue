<template>
  <div class="container-fluid px-0">
    <the-header :scrollPosition="scrollPosition" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeMount } from "vue";
import { useStore } from "vuex";

import TheHeader from "./components/Layout/Header/TheHeader.vue";

export default defineComponent({
  components: { TheHeader },
  setup() {
    const store = useStore();
    const scrollPosition = ref<number>();

    const updateScroll = () => {
      scrollPosition.value = window.scrollY;
    };

    onBeforeMount(async () => {
      await store.dispatch('moviesModule/fetchVideos');
      await store.dispatch('moviesModule/fetchCategories');
    });

    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });

    return { scrollPosition };
  },
});
</script>

<style>
body {
  background-color: #141414;
}
</style>
