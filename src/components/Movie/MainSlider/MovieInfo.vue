<template>
  <div class="carousel-caption d-none d-md-block rounded">
    <h5 class="text-light">First slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>
    <button class="btn btn-light">
      <div class="row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-play-fill col-4 p-0"
          viewBox="0 0 16 16"
        >
          <path
            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
          />
        </svg>
        <h6 class="mb-0 ps-0 col-6 pe-5">Odtwórz</h6>
      </div>
    </button>
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
  background: rgba(20, 20, 20, 0.6);
}
</style>
