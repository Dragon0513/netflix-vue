<template>
  <div class="container-fluid ps-0 ms-0">
    <div class="row">
      <div class="col-12 pe-0">
        <div class="container-fluid mx-0 px-0 position-relative">
          <img
            class="pe-0"
            :src="series.urlPic"
            alt="movie"
            style="width: 100%"
          />

          <div id="desc" class="rounded py-2">
            <h5 class="text-light">{{ series.title }}</h5>
            <p class="d-none d-md-block d-xl-block d-xxl-block">
              {{ series.description}}
            </p>
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
        </div>
      </div>
      <movies-slider />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import MoviesSlider from "@/components/Movie/MoviesSlider/MoviesSlider.vue";

export default defineComponent({
  components: { MoviesSlider },
  setup() {
    const store = useStore();

    const series = computed(() => {
      return store.getters["moviesModule/getVideos"].series[0] || {};
    });

    const loadVideos = async () => {
      await store.dispatch("moviesModule/fetchVideos");
    };

    onBeforeMount(() => {
      loadVideos();
    });

    return { series };
  },
});
</script>

<style lang="scss" scoped>
#desc {
  position: absolute;
  color: white;
  bottom: 5%;
  left: 25%;
  width: 50%;
  text-align: center;
  background: rgba(20, 20, 20, 0.6);
}
.container-fluid {
  img {
    height: 90vh;
  }
}
</style>
