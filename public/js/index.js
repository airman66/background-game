const teleport = document.getElementById("teleportLink");
const smooth = document.getElementById("smoothLink");
const body = document.getElementsByTagName("body")[0];
const spans = document.querySelectorAll("h1>span");

const intervalTime = 250;
const r = Math.ceil(Math.random() * 255);
const g = Math.ceil(Math.random() * 255);
const b = Math.ceil(Math.random() * 255);
body.style.background = `rgb(${r}, ${g}, ${b})`;

for (const el of spans) {
	const r = Math.ceil(Math.random() * 255);
	const g = Math.ceil(Math.random() * 255);
	const b = Math.ceil(Math.random() * 255);
	el.style.color = `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
	const r = Math.ceil(Math.random() * 255);
	const g = Math.ceil(Math.random() * 255);
	const b = Math.ceil(Math.random() * 255);
	body.style.background = `rgb(${r}, ${g}, ${b})`;

	for (const el of spans) {
		const r = Math.ceil(Math.random() * 255);
		const g = Math.ceil(Math.random() * 255);
		const b = Math.ceil(Math.random() * 255);
		el.style.color = `rgb(${r}, ${g}, ${b})`;
	}
}, intervalTime);

teleport.addEventListener("mouseover", () => {
	const r = Math.ceil(Math.random() * 254);
	const g = Math.ceil(Math.random() * 254);
	const b = Math.ceil(Math.random() * 254);
	teleport.style.background = `rgb(${r}, ${g}, ${b})`;
});

teleport.addEventListener("mouseout", () => {
	teleport.style.background = "white";
});

smooth.addEventListener("mouseover", () => {
	const r = Math.ceil(Math.random() * 254);
	const g = Math.ceil(Math.random() * 254);
	const b = Math.ceil(Math.random() * 254);
	smooth.style.background = `rgb(${r}, ${g}, ${b})`;
});

smooth.addEventListener("mouseout", () => {
	smooth.style.background = "white";
});

document.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});