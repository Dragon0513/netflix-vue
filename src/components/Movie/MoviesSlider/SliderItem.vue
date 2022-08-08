<template>
  <transition appear>
    <div class="col" @mouseenter="toggleContent" @mouseleave="toggleContent">
      <router-link to="/browse">
        <img
          :src="video?.urlPic"
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
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    video: {
      required: false,
    },
  },
  setup(props) {
    const isContent = ref(false);

    const toggleContent = () => {
      isContent.value = !isContent.value;

    };

    return { toggleContent, isContent };
  },
});
</script>

<style scoped>
.col {
  transition: transform 0.2s;
}

.col:hover {
  transform: scale(1.35);
}

.content {
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.88);
  width: auto;
  opacity: 60%;
  left: 5;
}

.v-enter-active {
  animation: showUp 1s;
}

.v-leave-active {
  animation: showUp 1s reverse;
}

@keyframes showUp {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
