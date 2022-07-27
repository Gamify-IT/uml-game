<template>
  <div>
    <div class="diagram-choise-wrapper">
      <div
        :class="['diagram-choise', selected === 0 ? 'selected' : ''].join(' ')"
        @click="select(0)"
        v-html="diagrams[0]"
      ></div>
      <div
        :class="['diagram-choise', selected === 1 ? 'selected' : ''].join(' ')"
        @click="select(1)"
        v-html="diagrams[1]"
      ></div>
      <div
        :class="['diagram-choise', selected === 2 ? 'selected' : ''].join(' ')"
        @click="select(2)"
        v-html="diagrams[2]"
      ></div>
    </div>
    <div class="submit-button-wrapper">
      <div class="status-display text-success" v-if="status === 'correct'">
        <i class="bi-check"></i>
        <span>Correct answer</span>
      </div>
      <div class="status-display text-danger" v-if="status === 'wrong'">
        <i class="bi-x"></i>
        <span>Wrong answer</span>
      </div>
      <button
        class="btn btn-primary"
        :disabled="selected == null"
        @click="onSubmit()"
        v-if="status === ''"
      >
        Submit
      </button>
      <button
        class="btn btn-primary"
        @click="onNextPressed()"
        v-if="status !== ''"
      >
        <i class="bi bi-caret-right"></i>
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { diagrams } from "./diagrams";
export default defineComponent({
  name: "GamePrototype",
  props: {},
  components: {},
  data() {
    return {
      text: "",
      diagrams: [] as string[],
      selected: null as number | null,
      status: "",
      currentLevel: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 3; i++) {
        (window as any).mermaid.render(
          "slonfseonf" + Math.random().toString().replace(".", ""),
          diagrams[this.currentLevel][i],
          (res: string) => {
            this.diagrams[i] = res;
          }
        );
      }
    },
    select(index: number) {
      this.selected = index;
    },
    onSubmit() {
      if (this.currentLevel === 0) {
        if (this.selected === 1) {
          this.status = "correct";
        } else {
          this.status = "wrong";
        }
      } else if (this.currentLevel === 1) {
        if (this.selected === 0) {
          this.status = "correct";
        } else {
          this.status = "wrong";
        }
      }
    },
    onNextPressed() {
      this.status = "";
      this.currentLevel = (this.currentLevel + 1) % 2;
      this.init();
    },
  },
});
</script>

<style>
.diagram-choise-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 42px;
  padding-top: 42px;
}

.diagram-choise {
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 64ms ease-out;
}

.diagram-choise.selected {
  outline: blue 3px solid;
  outline-offset: 2px;
}

.diagram-choise:hover {
  transform: scale(1.1);
}

.submit-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 42px;
}

.status-display {
  display: flex;
}
</style>
