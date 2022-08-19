<template>
  <div class="container-fluid">
    <div class="row" v-for="(video, key) in videos" :key="key">
      <slider-item v-for="(vid, id) in video" :video="vid" :key="id">
        {{ vid.title }}
      </slider-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import SliderItem from "@/components/Movie/MoviesSlider/SliderItem.vue";

export default defineComponent({
  components: { SliderItem },
  setup() {
    const store = useStore();
    // const filteredMovies = ref<Array<Record<string, string>>>();
    const route = useRoute();

    const filteredVideos = computed(() => {
      let videos: Array<Record<string, string>> = [];
      const query = route.query.q?.toString();

      let arr1: Array<Record<string, string>> = store.getters[
        "moviesModule/getVideos"
      ].movies.filter((movie: Record<string, string>) =>
        movie.title.toLowerCase().includes(query ? query : "")
      );
      let arr2: Array<Record<string, string>> = store.getters[
        "moviesModule/getVideos"
      ].series.filter((movie: Record<string, string>) =>
        movie.title.toLowerCase().includes(query ? query : "")
      );

      videos = videos.concat(arr1);
      videos = videos.concat(arr2);

      return videos;
    });

    const videos = computed(() => {
      const chunkSize = 5;
      let array: Array<Array<Record<string, string>>> = [];

      for (let i = 0; i < filteredVideos.value.length; i += chunkSize) {
        const chunk = filteredVideos.value.slice(i, i + chunkSize);
        array.push(chunk);
      }

      return array;
    });

    const show = () => {
      console.log(filteredVideos.value);
    };

    return { videos };
  },
});
</script>

<style lang="scss" scoped>
.container-fluid {
  margin-top: 10vh;
  .row {
    margin-bottom: 5vh;
  }
}
</style>
