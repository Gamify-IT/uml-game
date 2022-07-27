<template>
  <div>
    <Game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "./Game.vue";
export default defineComponent({
  name: "App",
  props: {},
  components: { Game },
});
</script>
<style></style>
