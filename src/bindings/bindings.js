import Component from "can-component";

Component.extend({
	tag:"can-coach-bindings",

	view: `<div class="graph-container" />`,

	ViewModel: {
		graphContainer: "any",

		connected(element) {
			this.graphContainer = element;
		}
	}
});
