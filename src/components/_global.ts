import Vue from "vue";

const requireComponent = require.context(
  ".",
  true,
  // Only include "Base" prefixed .vue files
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const fileSplitArr: string[] = fileName.split("/");

  const componentConfig = requireComponent(fileName);

  const componentName = fileSplitArr[fileSplitArr.length - 1].split(".")[0];

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
