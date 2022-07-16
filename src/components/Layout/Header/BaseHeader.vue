<template>
  <nav :class="isScrolling">
    <div class="container-fluid">
      <router-link to="/browse" class="navbar-brand" href="#">
        <h2 class="text-danger">Vueflix</h2></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/browse"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Strona Główna</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/browse" class="nav-link" href="#"
              >Filmy</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/browse" class="nav-link" href="#"
              >Seriale</router-link
            >
          </li>
        </ul>

        <searching-bar />

        <dropdown />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import SearchingBar from "./SearchingBar.vue";
import Dropdown from "./Dropdown.vue";

export default defineComponent({
  components: { SearchingBar, Dropdown },
  props: {
    scrollPosition: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const isScrolling = computed(() => {
      if (props.scrollPosition > 10) {
        return "navbar navbar-expand-md color1 fixed-top navbar-dark";
      } else {
        return "navbar navbar-expand-md shadow color fixed-top navbar-dark";
      }
    });
    return {
      isScrolling,
    };
  },
});
</script>

<style scoped>
.color {
  background-color: rgba(0, 0, 0, 0.1);
  animation: hideNav 0.7s;
}

.color1 {
  background-color: rgb(20, 20, 20);
  animation: showNav 0.7s;
}

@keyframes showNav {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideNav {
  100% {
    opacity: 1;
  }

  0% {
    opacity: 0.1;
  }
}
</style>
