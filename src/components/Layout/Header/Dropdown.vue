<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
