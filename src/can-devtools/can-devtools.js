import Component from "can-component";
import DefineMap from "can-define/map/map";
import view from "./can-devtools.stache";
import "./can-devtools.less";

const DevtoolsVM = DefineMap.extend({
  minimized: { type: "boolean", value: true },

  toggle() {
    this.minimized = !this.minimized;
  }
});

Component.extend({
  tag: "can-devtools",

  ViewModel: DevtoolsVM,

  view: view
});
