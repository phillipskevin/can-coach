import Component from "can-component";
import queues from "can-queues";

import "./queues.less";

Component.extend({
	tag: "can-coach-queues",

	view: `
		<table>
			<thead>
				<td>#</td>
				<td>Task</td>
				<td>Reason</td>
			</thead>
			{{#each(stack, item=value index=index}}
					<tr>
						<td>{{index}}</td>
						<td>{{item.fn}}</td>
						<td>{{item.reason}}</td>
					</tr>
			{{/each}}
		</table>
	`,

	ViewModel: {
		stack: {
			value({ resolve }) {
				resolve(
						[
						{
							"fn": "update scope.inputVal of <input>"
						},
						{
							"fn": "Observation<viewModel.inputVal>.onDependencyChange",
							"reason": "MyInputElVM{}'s inputVal changed to Kevin from Connor"
						},
						{
							"fn": "Observation<viewModel.inputVal>.update"
						},
						{
							"fn": "SetterObservable<viewModel.inputVal>.handler",
							"reason": "Observation<viewModel.inputVal> changed to Kevin from Connor"
						},
						{
							"fn": "update scope.first of <my-input-el>"
						},
						{
							"fn": "Observation<NameYVM{}'s fullName getter>.onDependencyChange",
							"reason": "NameYVM{}'s first changed to Kevin from Connor"
						},
						{
							"fn": "Observation<NameYVM{}'s fullName getter>.update"
						},
						{
							"fn": "NameYVM{}'s fullName event emitter",
							"reason": "Observation<NameYVM{}'s fullName getter> changed to Kevin Phillips from Connor Phillips"
						},
						{
							"fn": "Observation<{{fullName}}::ScopeKeyData.read>.onDependencyChange",
							"reason": "NameYVM{} dispatched \"fullName\" with Kevin Phillips Connor Phillips"
						},
						{
							"fn": "Observation<{{fullName}}::ScopeKeyData.read>.update"
						},
						{
							"fn": "ScopeKeyData{{fullName}}.dispatch",
							"reason": "Observation<{{fullName}}::ScopeKeyData.read> changed to Kevin Phillips from Connor Phillips"
						},
						{
							"fn": "live.text update::ScopeKeyData{{fullName}}",
							"reason": "ScopeKeyData{{fullName}} changed to Kevin Phillips from Connor Phillips"
						}
				]
				);
			}
		}
	}
});
