import Component from "can-component";
import DefineMap from "can-define/map/map";
import stache from "can-stache";

const VM = DefineMap.extend({
  first: { type: "string", value: "Kevin" },

  last: { type: "string", value: "Phillips" },

  get fullName() {
    return `${this.first} ${this.last}`;
  }
});

Component.extend({
  tag: "name-y",

  ViewModel: VM,

  view: stache(`
    <label>
      First:
      <input value:from="first" on:input:value:to="first" />
    </label>

    <label>
      Last:
      <input value:from="last" on:input:value:to="last" />
    </label>

    <h2>
      {{fullName}}
    </h2>
  `)
});

document.body.appendChild(
    stache("<name-y />")()
);
