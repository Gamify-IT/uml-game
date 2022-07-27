<template>
  <div>
    <textarea
      v-model="text"
      style="
        height: 100px;
        width: 100px;
        background-color: azure;
        white-space: pre-wrap;
      "
    >
    </textarea>
    <div class="mermaid">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  data() {
    return {
      text: String,
    };
  },
  mounted() {
    console.log("");
  },
  methods: {
    click() {
      console.log("");
    },
  },
});
</script>
<style></style>
