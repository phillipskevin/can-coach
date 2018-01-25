const div = document.querySelector("div");

let count = 0;
const updateDiv = () => {
	div.innerHTML = `Count: ${count++}`;

	setTimeout(updateDiv, 200);
};

updateDiv();
