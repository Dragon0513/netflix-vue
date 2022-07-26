<template>
  <div class="container-fluid px-0">
    <the-header :scrollPosition="scrollPosition" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import TheHeader from "./components/Layout/Header/TheHeader.vue";

export default defineComponent({
  components: { TheHeader },
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

<style>
body {
  background-color: #141414;
}
</style>
