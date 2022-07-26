<template>
  <div class="container-fluid px-0">
    <div class="cont">
      <h2>Login form here</h2>
    </div>
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

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  background-image: url("https://paperwriter.ca/wp-content/uploads/2022/05/BBC-courtroom-drama-You-Dont-Know-Me-hit-Netflix-in.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .cont {
    margin-top: 45vh;
    color: white;
    text-align: center;
    position: absolute;
    width: 100%;
  }
}
</style>
