import Component from "can-component";
import DefineMap from "can-define/map/map";
import view from "./can-coach.stache";
import "./can-coach.less";

const ViewModel = DefineMap.extend({
  minimized: { type: "boolean", default: true },

  toggle() {
    this.minimized = !this.minimized;
  }
});

Component.extend({
  tag: "can-coach",
  ViewModel,
  view
});
