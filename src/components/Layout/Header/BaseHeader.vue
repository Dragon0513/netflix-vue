<template>
  <nav class="navbar navbar-expand-md bg-dark fixed-top navbar-dark">
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
import { defineComponent } from "vue";
import SearchingBar from "./SearchingBar.vue";
import Dropdown from "./Dropdown.vue";

export default defineComponent({
  components: { SearchingBar, Dropdown },
  setup() {
    return {};
  },
});
</script>
