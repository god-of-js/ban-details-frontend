<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseButton",
})
export default class BaseButton extends Vue {
  @Prop({ default: false }) loading!: boolean;
}
</script>

<template>
  <button v-on="$listeners" :class="$style['c-base-button']">
    <slot v-if="!loading" />
    <span v-else>Loading.... </span>
  </button>
</template>

<style lang="scss" module>
@import "@/styles";
.c-base-button {
  width: fit-content;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $pink;
  border: transparent;
  cursor: pointer;
  color: $white;
  margin: 5px;
}
.c-base-button--transparent {
  background: transparent;
  border: transparent;
  color: $white;
  cursor: pointer;
}
</style>
