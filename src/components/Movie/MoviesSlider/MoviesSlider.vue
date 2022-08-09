<template>
  <div class="row-8">
    <div
      :id="id"
      class="carousel slide my-auto"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner px-5 pt-4">
        <div
          :class="id === 0 ? `carousel-item active` : `carousel-item`"
          v-for="(videos, id) in sortedVideos"
          :key="id"
        >
          <div class="container-fluid">
            <h3 class="text-light">{{ title }}</h3>
            <div class="row">
              <slider-item v-for="(vid, k) in videos" :key="k" :video="vid">
                {{ vid.title }}
              </slider-item>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="`#${id}`"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="`#${id}`"
        data-bs-slide="next"
        @click="show"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  onBeforeUpdate,
  onBeforeMount,
} from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SliderItem from "../MoviesSlider/SliderItem.vue";

export default defineComponent({
  props: ["category", "id"],
  components: { SliderItem },
  setup(props) {
    const route = useRoute();
    const store = useStore();
    const videos = ref<Array<Record<string, string>>>([]);
    const sortedVideos = ref<Array<Array<Record<string, string>>>>([]);

    const findVideos = () => {
      for (const key in props.category) {
        let movie: Record<string, string> = {};
        let serie: Record<string, string> = {};
        if (route.path === "/browse" || route.path === "/movies") {
          movie = store.getters["moviesModule/getVideos"].movies.find(
            (vid: Record<string, string>) => vid.id === props.category[key]
          );
        }

        if (route.path === "/browse" || route.path === "/series") {
          serie = store.getters["moviesModule/getVideos"].series.find(
            (vid: Record<string, string>) => vid.id === props.category[key]
          );
        }

        if (route.path === "/browse") {
          if (movie) {
            videos.value.push(movie);
          } else {
            videos.value.push(serie);
          }
        } else if (route.path === "/movies") {
          if (movie) {
            videos.value.push(movie);
          }
        } else {
          if (serie) {
            videos.value.push(serie);
          }
        }
      }
    };

    const sortVideos = () => {
      const chunkSize = 6;

      for (let i = 0; i < videos.value.length; i += chunkSize) {
        const chunk = videos.value.slice(i, i + chunkSize);
        sortedVideos.value.push(chunk);
      }
    };

    onBeforeUpdate(() => {
      findVideos();
      sortVideos();
    });

    onBeforeMount(() => {
      findVideos();
      sortVideos();
    });

    const title = computed(() => {
      let value = "";

      if (props.id === "horror") {
        value = "Horrory";
      }
      if (props.id === "fantasy") {
        value = "Fantasy";
      }
      if (props.id === "sf") {
        value = "Science Fiction";
      }
      if (props.id === "vueflix") {
        value = "Tylko na vueflix";
      }
      if (props.id === "thriller") {
        value = "Thrillery";
      }
      if (props.id === "action") {
        value = "Akcja";
      }

      return value;
    });

    const show = () => {
      console.log(videos.value);
    };

    const log = (item: any) => {
      console.log(item);
    };

    return { title, show, sortedVideos, log };
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
  padding-bottom: 10vh;
}

.row-8 {
  position: relative;
}
</style>
