<template>
  <div class="home" >
    <base-header />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseHeader from '../components/layout/Header/DefaultHeader.vue'

export default defineComponent({
  components: { BaseHeader },
  setup() {

    return {}
  }
});
</script>


