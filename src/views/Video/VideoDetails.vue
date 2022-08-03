<template>
  <div class="container">
    <h3>Show Title</h3>
    <iframe
      class="pt-5"
      src="https://www.youtube.com/embed/aWzlQ2N6qqg"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nostrum
      porro quo eum, praesentium, architecto enim nulla dicta dolores quis,
      officiis repellendus? Aperiam, tenetur? Dignissimos et tenetur sint nihil
      accusamus?
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    // const store = useStore();

    // const video = computed(() => {});

    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20vh;
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
