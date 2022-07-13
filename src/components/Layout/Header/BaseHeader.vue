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
        <div class="dropdown text-light">
          <button
            class="btn dropdown-toggle text-white"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              class="rounded"
              height="40"
              width="40"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="user"
            />
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li><a class="dropdown-item" href="#">Konto</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Wyloguj się</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchingBar from "./SearchingBar.vue";

export default defineComponent({
  components: { SearchingBar },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.dropdown {
  padding-right: 2rem;

}

.dropdown-menu {
  background: rgba(59, 57, 57, 0.7);
}

.dropdown:hover .dropdown-menu {
  display: block;
  left: -70%;
}
</style>
