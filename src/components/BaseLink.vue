<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseLink",
})
export default class BaseLink extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ required: true }) to!: { name: string; params: any };
}
</script>

<template>
  <router-link :to="to" :class="$style['c-base-link']"><slot /></router-link>
</template>

<style module lang="scss">
@import "@/styles";
.c-base-link {
  color: $white;
}
</style>
