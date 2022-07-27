<template>
  <div>
    <textarea
      v-model="text"
      @input="textareaChanged()"
      style="
        height: 200px;
        width: 500px;
        background-color: azure;
        white-space: pre-wrap;
      "
    >
    </textarea>
    <div id="diagramm" class="mermaid" v-html="diagrammHTML"></div>
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
      diagrammHTML: "",
      text: "",
    };
  },
  mounted() {
    console.log("");
  },
  methods: {
    click() {
      console.log("");
    },
    textareaChanged() {
      console.log(this.text);
      (window as any).mermaid.render("diagrammmm", this.text, (res: string) => {
        this.diagrammHTML = res;
      });
    },
  },
});
</script>
<style></style>
