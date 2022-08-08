<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-light slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(video, key) in videos"
        :key="key"
        :class="key === 0 ? `carousel-item active` : `carousel-item`"
        data-bs-interval="10000"
      >
        <img
          :src="video.urlPic"
          class="d-block w-100"
          alt="witcher"
          height=""
        />
        <movie-info :id="video.id">
          <template #title>
            <h5 class="text-light">{{ video.title }}</h5>
          </template>
          <template #description
            ><p>
              {{ video.description }}
            </p></template
          >
        </movie-info>
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
      @click="show"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import MovieInfo from "../MainSlider/MovieInfo.vue";

export default defineComponent({
  components: {
    MovieInfo,
  },
  setup() {
    const store = useStore();

    const itemClass = computed((key) => {
      if (key === 0) {
        return "carousel-item active";
      } else {
        return "carousel-item";
      }
    });

    const videos = computed(() => {
      return store.getters["moviesModule/getVideos"].movies.slice(0, 3);
    });

    const show = () => {
      console.log(videos.value);
    };

    return { show, videos, itemClass };
  },
});
</script>

<style lang="scss" scoped>
img {
  height: 90vh;
}
</style>
