<template>
  <div class="container-fluid">
    <div class="row">
      <slider-item
        :video="{
          id: 'ew432t441wqdqwed223',
          urlPic:
            'https://cdn1.naekranie.pl/wp-content/uploads/2019/12/Transformersageheader-1024x576_5df10975013c6.jpeg',
        }"
      />
      <slider-item
        :video="{
          id: 'ew432t441wqdqwed223',
          urlPic:
            'https://cdn1.naekranie.pl/wp-content/uploads/2019/12/Transformersageheader-1024x576_5df10975013c6.jpeg',
        }"
      />
      <slider-item
        :video="{
          id: 'ew432t441wqdqwed223',
          urlPic:
            'https://cdn1.naekranie.pl/wp-content/uploads/2019/12/Transformersageheader-1024x576_5df10975013c6.jpeg',
        }"
      />
      <slider-item
        :video="{
          id: 'ew432t441wqdqwed223',
          urlPic:
            'https://cdn1.naekranie.pl/wp-content/uploads/2019/12/Transformersageheader-1024x576_5df10975013c6.jpeg',
        }"
      />
      <slider-item
        :video="{
          id: 'ew432t441wqdqwed223',
          urlPic:
            'https://cdn1.naekranie.pl/wp-content/uploads/2019/12/Transformersageheader-1024x576_5df10975013c6.jpeg',
        }"
      />
      <slider-item
        :video="{
          id: 'ew432t441wqdqwed223',
          urlPic:
            'https://cdn1.naekranie.pl/wp-content/uploads/2019/12/Transformersageheader-1024x576_5df10975013c6.jpeg',
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SliderItem from "@/components/Movie/MoviesSlider/SliderItem.vue";

export default defineComponent({
  components: { SliderItem },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container-fluid {
    margin-top: 10vh;
}
</style>
