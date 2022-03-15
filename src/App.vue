<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "App",
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: $base-color;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
