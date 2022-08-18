<template>
  <div class="container-fluid px-0">
    <the-header v-show="isAuth" :scrollPosition="scrollPosition" />
    <router-view v-slot="slotProps">
      <transition name="route" appear >
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeMount,
} from "vue";
import { useStore } from "vuex";

import TheHeader from "./components/Layout/Header/TheHeader.vue";
import router from "./router";

export default defineComponent({
  components: { TheHeader },
  setup() {
    const store = useStore();
    const scrollPosition = ref<number>();

    const updateScroll = () => {
      scrollPosition.value = window.scrollY!;
    };

    onBeforeMount(async () => {
      store.dispatch("authModule/tryLogin");
      await store.dispatch("moviesModule/fetchVideos");
      await store.dispatch("moviesModule/fetchCategories");
    });

    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });

    const didAutoLogout = computed(() => {
      return store.getters["authModule/didAutoLogout"];
    });

    const isAuth = computed(() => {
      return store.getters["authModule/isAuth"];
    });

    watch(didAutoLogout.value, (curVal, oldVal) => {
      if (curVal && oldVal !== oldVal) {
        router.replace("/browse");
      }
    });

    return { scrollPosition, isAuth };
  },
});
</script>

<style>
body {
  background-color: #141414;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
