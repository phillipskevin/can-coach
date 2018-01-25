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
						<td>{{item.fn.name}}</td>
						<td>{{item.meta.reasonLog.join(" ")}}</td>
					</tr>
			{{/each}}
		</table>
	`,

	ViewModel: {
		stack: {
			value({ resolve }) {
				resolve( queues.stack() );
			}
		}
	}
});
