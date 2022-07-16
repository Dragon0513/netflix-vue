<template>
  <div class="carousel-caption d-none d-md-block rounded ">
    <h5 class="text-light">First slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.carousel-caption {

  background:  rgba(20, 20, 20, 0.6);;
  margin-inline: 20%;

}
</style>
