import Component from "can-component";
import DefineMap from "can-define/map/map";
import stache from "can-stache";

const VM = DefineMap.extend({
	first: { type: "string", default: "Connor" },

	last: { type: "string", default: "Phillips" },

	isOld: { type: "boolean", default: false },

	get fullName() {
		return `${this.first} ${this.last}`;
	}
});

Component.extend({
	tag: "my-input-el",

	ViewModel: {
		label: "string",
		inputVal: "string"
	},

	view: `
		<label>
			{{label}}:
			<input value:from="inputVal" on:input:value:to="inputVal" />
		</label>
	`
});

Component.extend({
	tag: "name-y",

	ViewModel: VM,

	view: stache(`
		<my-input-el inputVal:bind="first" label:from="'First'" />
		<my-input-el inputVal:bind="last" label:from="'Last'" />

		<h2>
		{{fullName}} {{#if isOld}}is old{{else}}is young{{/if}}
		</h2>
	`)
});

document.body.appendChild(
		stache("<name-y />")()
		);
