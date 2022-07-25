<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-light slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="https://img.mmorpg.org.pl/system/posts/posters/000/037/377/medium/dark.jpeg"
          class="d-block w-100"
          alt="witcher"
          height=""
        />
        <movie-info />
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img
          src="https://multikino.pl/-/media/images/film-and-events/karta_filmu/avengers-koniec-gry-zaslepka.jpg"
          class="d-block w-100"
          alt="..."
        />
        <movie-info />
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img
          src="https://pl.jugomobile.com/wp-content/uploads/2022/04/Nowy-zwiastun-Doctor-Strange-2-potwierdza-dwie-powracajace-postacie-MCU.jpg"
          class="d-block w-100"
          alt="..."
        />
        <movie-info />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieInfo from "../MainSlider/MovieInfo.vue";

export default defineComponent({
  components: {
    MovieInfo,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
img {
  height: 90vh;
}
</style>
