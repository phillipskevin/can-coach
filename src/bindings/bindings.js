import Component from "can-component";
import debug from "can-debug";
import getGraph from "can-debug/src/get-graph/get-graph";
import formatGraph from "can-debug/src/draw-graph/format-graph";
import vis from "can-debug/src/draw-graph/vis";
import canSymbol from "can-symbol";

import "./bindings.less";

const viewModelSymbol = canSymbol.for("can.viewModel");

Component.extend({
	tag:"can-coach-bindings",

	view: `
		<can-import from="~/src/select-component/select-component" />
		<select-component selectedComponent:to="selectedComponent" />
		<iframe />
	`,

	ViewModel: {
		selectedComponent: "any",

		visCode: {
			value({ resolve }) {
				fetch("../node_modules/can-debug/src/draw-graph/vis.js")
							.then((res) => res.text())
							.then((code) => resolve(code));
			}
		}
	},

	events: {
		// bind on this so it will be ready
		"{viewModel} visCode"(vm, ev, code) {},

		"{viewModel} selectedComponent"(vm, ev, comp) {
			const container = this.element.querySelector("iframe");
			const doc = container.contentDocument;
 			const targetVM = comp[viewModelSymbol];
 			const graph = getGraph(targetVM, "fullName");
 			const data = formatGraph(graph);
			const code = this.viewModel.visCode;

			const script = doc.createElement("script");
			script.text = code;
			doc.body.appendChild(script);

			const drawScript = doc.createElement("script");
			drawScript.text = ` 
				var container = document.createElement("div");

				var options = {
					physics: {
						solver: "repulsion"
					}
				};

				document.title = "can-debug: Dependency Graph";
				document.body.appendChild(container);
				new vis.Network(
					container, 
					{
						nodes: new vis.DataSet(${ JSON.stringify(data.nodes) }),
						edges: new vis.DataSet(${ JSON.stringify(data.edges) })
					},
					options
				);
			`;
			doc.body.appendChild(drawScript);
		}
	}
});
