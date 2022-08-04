<template>
  <div class="container">
    <h3>{{ video.title }}</h3>
    <iframe
      class="pt-5"
      :src="video.url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <button @click="show" class="btn btn-info">Show</button>
    <p>
      {{video.description}}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();

    const video = computed(() => {
      const moviesVideo = store.getters["moviesModule/getVideos"].movies.find(
        (movie: Record<string, string>) => movie.id == props.id
      );
      const seriesVideo = store.getters["moviesModule/getVideos"].series.find(
        (serie: Record<string, string>) => serie.id == props.id
      );

      if (moviesVideo) {
        return moviesVideo;
      } else {
        return seriesVideo;
      }
    });

    const show = () => {
      console.log(video.value.id);
    };

    return { show, video };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10vh;
  color: white;
  text-align: center;
  iframe {
    height: 70vh;
    width: 100%;
  }
  p {
    padding-top: 10%;
  }
}
</style>
