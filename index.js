import stache from "can-stache";
import "./src/can-devtools/can-devtools";

const view = stache(`
    <can-devtools />
`);

document.body.appendChild(
    view({})
);
