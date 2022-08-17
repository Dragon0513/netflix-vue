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
            v-model="data.email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Hasło</label>
          <input
            type="password"
            class="form-control bg-dark text-white"
            id="exampleInputPassword1"
            v-model="data.password"
          />
          <div
            v-if="!data.formIsValid"
            id="emailHelp"
            class="form-text text-danger"
          >
            Wprowadź poprawny email i hasło.
          </div>
        </div>
        <button @click="submitForm" type="submit" class="btn btn-danger">
          <div
            v-if="data.isLoading"
            class="spinner-border text-light"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <strong v-else>{{ switchButtonCaption }}</strong>
        </button>
        <button @click="switchAuthMode" class="btn btn-danger">
          <strong>{{ switchModeButtonCaption }}</strong>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    });

    const switchButtonCaption = computed(() => {
      if (data.mode === "login") {
        return "Zaloguj";
      } else {
        return "Zarejestruj";
      }
    });

    const switchModeButtonCaption = computed(() => {
      if (data.mode === "login") {
        return "Przejdź do rejestracji";
      } else {
        return "Przejdź do logowania";
      }
    });

    const handleError = () => {
      data.error = null;
    };

    const submitForm = async () => {
      if (
        !data.email ||
        !data.email.includes("@") ||
        data.password.length < 6
      ) {
        data.formIsValid = false;
      }

      data.isLoading = true;

      const actionPayload = {
        email: data.email,
        password: data.password,
      };

      try {
        if (data.mode === "login") {
          await store.dispatch("authModule/login", actionPayload);
        } else {
          await store.dispatch("authModule/signup", actionPayload);
        }
        router.replace("/browse");
      } catch (error: any) {
        data.error =
          error.message || "Błąd weryfikacji, spróbuj ponownie później!";
      }

      data.isLoading = false;
    };

    const switchAuthMode = () => {
      if (data.mode === "login") {
        data.mode = "signup";
      } else {
        data.mode = "login";
      }
    };

    return {
      data,
      switchButtonCaption,
      switchModeButtonCaption,
      handleError,
      submitForm,
      switchAuthMode,
    };
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
        margin-bottom: 5px;
      }

      button:hover {
        background-color: rgb(131, 11, 11);
        border-color: rgb(131, 11, 11);
      }
    }
  }
}
</style>
