<template>
  <div className="side-by-side">
    <textarea v-model="text" @input="textareaChanged()"> </textarea>
    <div id="diagramm" class="mermaid" v-html="diagrammHTML"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AdminInterface",
  props: {},
  components: {},
  data() {
    return {
      diagrammHTML: "",
      text: `classDiagram
class Person
Person : -String firstName
Person : -String lastName
class Student
Student : -String matriculationNumber
Student : -String semester
Person <-- Student`,
    };
  },
  mounted() {
    this.textareaChanged.call({ text: this.text });
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

<style scoped>
.side-by-side {
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 20px;
}

.side-by-side > * {
  flex: 1;
  width: 100%;
  height: 100%;
}

textarea {
  background-color: azure;
  white-space: pre-wrap;
  font-family: "Courier New", Courier, monospace;
}
</style>
