<template>
  <div>
    <form @submit.prevent="" class="d-flex" role="search">
      <button
        v-if="!isSearching"
        type="button"
        class="btn"
        @click="toggleSearch"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="35"
          fill="white"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>

      <input
        v-else
        ref="input"
        class="form-control me-2 bg-dark text-white"
        type="search"
        placeholder="Szukaj"
        aria-label="Search"
        @blur="isSearching = false"
        autofocus
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from "vue";

export default defineComponent({
  setup() {
    const isSearching = ref(false);
    const input = ref();

    const toggleSearch = () => {
      isSearching.value = !isSearching.value;
    };

    onUpdated(() => {
      input.value?.focus();
    });

    return { isSearching, toggleSearch, input };
  },
});
</script>
