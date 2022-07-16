<template>
  <div>
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide my-auto"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner px-5 pb-5 pt-4">
        <div class="carousel-item active">
          <div class="container-fluid">
            <h3 class="text-light">Tylko na Vueflix</h3>
            <div class="row">
              <slider-item>Hello</slider-item>
              <slider-item />
              <slider-item />
              <slider-item />
              <slider-item />
              <slider-item />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid">
            <h3 class="text-light">Tylko na Vueflix</h3>
            <div class="row">
              <slider-item>Hello</slider-item>
              <slider-item />
              <slider-item />
              <slider-item />
              <slider-item />
              <slider-item />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid">
            <h3 class="text-light">Tylko na Vueflix</h3>
            <div class="row">
              <slider-item>Hello</slider-item>
              <slider-item />
              <slider-item />
              <slider-item />
              <slider-item />
              <slider-item />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SliderItem from "../MoviesSlider/SliderItem.vue";

export default defineComponent({
  components: { SliderItem },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  height: 44px;
  width: 44px;
  background: none;
  margin: auto 0;
  border-radius: 50%;
  border: 3px solid rgba(139, 136, 136, 0.8);
  margin-top: auto;
}

.carousel-control-next:hover,
.carousel-control-prev:hover {
  background-color: rgb(245, 238, 238);
  opacity: 70%;
}

.carousel-inner {
  position: static;
  padding-bottom: 40px;
}
</style>
