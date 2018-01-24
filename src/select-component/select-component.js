import Component from "can-component";
import canSymbol from "can-symbol";
import "./select-component.less";

const viewModelSymbol = canSymbol.for("can.viewModel");

Component.extend({
	tag: "select-component",

	view: `
		<a href="javascript://"
			on:click="selectComponent()"
		>&#8598;</a>

		{{#if highlightedComponent}}
			<{{highlightedComponentTagName}}>
		{{/if}}

	`,

	ViewModel: {
		selectedComponent: "any",
		highlightedComponent: "any",

		get highlightedComponentTagName() {
			if (this.highlightedComponent) {
				return this.highlightedComponent.tagName.toLowerCase();
			}
		},

		selecting: { type: "boolean", default: false },

		selectComponent() {
			this.selecting = !this.selecting;
		},
	},

	events: {
		findContainingComponent(el) {
			if (!el) {
				return;
			}

			// don't debug the debugger
			if (el.contains(this.element)) {
				return;
			}

			const hasViewModel = el[viewModelSymbol];

			if (hasViewModel) {
				return el;
			}

			return this.findContainingComponent(el.parentNode);
		},

		"{window} mouseover"(el, ev) {
			if (this.viewModel.selecting) {
				const newHighlightedComponent = this.findContainingComponent(ev.target);
				if (newHighlightedComponent && newHighlightedComponent !== this.viewModel.highlightedComponent) {
					this.viewModel.highlightedComponent = newHighlightedComponent;
				}
			}
		},

		"{viewModel} highlightedComponent"(vm, ev, highlightedEl, unhighlightedEl) {
			let overlay, width;

			if (highlightedEl) {
				overlay = document.createElement("div");
				overlay.id = "highlighted-element-overlay";
				overlay.innerHTML = "&nbsp";
				overlay.style.width = highlightedEl.offsetWidth ? highlightedEl.offsetWidth + 20 + "px" : "100%";
				overlay.style.height = highlightedEl.offsetHeight ? highlightedEl.offsetHeight + 20 + "px" : "100%";
				overlay.style.position = "absolute";
				overlay.style.top = highlightedEl.offsetTop - 10 + "px";
				overlay.style.left = highlightedEl.offsetLeft - 10 + "px";
				overlay.style["background-color"] = "rgba(100, 149, 237, 0.7)";
				document.body.appendChild(overlay);
			}

			if (unhighlightedEl) {
				overlay = document.getElementById("highlighted-element-overlay");
				document.body.removeChild(overlay);
			}
		},

		"{window} click"() {
			if (this.viewModel.highlightedComponent) {
				this.viewModel.selectedComponent = this.viewModel.highlightedComponent;
				this.viewModel.highlightedComponent = null;
				this.viewModel.selecting = false;
			}
		}
	}
});
