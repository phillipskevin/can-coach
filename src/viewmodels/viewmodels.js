import Component from "can-component";
import DefineMap from "can-define/map/map";
import view from "./viewmodels.stache";
import canSymbol from "can-symbol";
import observe from "can-observe";
import "./viewmodels.less";

const viewModelSymbol = canSymbol.for("can.viewModel");

const ViewModel = DefineMap.extend({
	selectedComponent: "any",

	get selectedComponentTagName() {
		if (this.selectedComponent) {
			return this.selectedComponent.tagName.toLowerCase();
		}
	},

	get selectedComponentViewModel() {
		if (this.selectedComponent) {
			return this.selectedComponent[viewModelSymbol];
		}
	},

	isBoolean(val) {
		return typeof val === "boolean";
	}
});

Component.extend({
	tag: "can-coach-viewmodels",
	ViewModel,
	view
});
