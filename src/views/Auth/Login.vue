<template>
  <div class="container-fluid px-0">
    <div class="cont">
      <form @submit.prevent>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email </label>
          <input
            type="email"
            class="form-control bg-dark text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text text-light">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Hasło</label>
          <input
            type="password"
            class="form-control bg-dark text-white"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-danger">
          <strong>Zaloguj</strong>
        </button>
      </form>
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
    margin-top: 35vh;
    color: white;
    position: absolute;
    width: 40%;
    margin-inline: 30%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    form {
      padding-inline: 20%;
      margin-block: 10%;

      input {
        border-color: rgb(20, 20, 20);
      }

      .btn {
        background-color: red;
        width: 100%;
      }
    }
  }
}
</style>
