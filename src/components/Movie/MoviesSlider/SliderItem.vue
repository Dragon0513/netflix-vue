<template>
  <div class="col" @mouseenter="toggleContent" @mouseleave="toggleContent">
    <router-link to="/browse">
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        class="card-img-top rounded"
        alt="slide"
      />
      <div v-if="isContent" class="content">
        <p>
          <slot></slot>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isContent = ref(false);

    const toggleContent = () => {
      isContent.value = !isContent.value;
    };

    return { toggleContent, isContent };
  },
});
</script>

<style scoped>
img {
  position: relative;
}

.col {
  position: relative;
  transition: transform 0.2s;
}

.col:hover {
  transform: scale(1.15);
}

.content {
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.88);
  width: auto;
  opacity: 60%;
  left: 5;
}
</style>
