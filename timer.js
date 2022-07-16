setInterval(() => {
	const date = new Date();
	document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}, 1000);

const button = document.getElementById("startButton");
if (button) {
	button.addEventListener("click", startTimer);
}
 const stopButton = document.getElementById('stopButton');
 stopButton.addEventListener('click', () => {
    if(intervalID){
        clearInterval(intervalID);
    }
 });

let intervalID = undefined;


function startTimer() {
	let display = document.getElementById("display");
	let initTime = +document.getElementById("initTime").value;
	let boom = document.createElement("img");

	boom.src = "nuclear-explosion.png";
	display.innerHTML = initTime;

	console.log(initTime);

	 intervalID = setInterval(() => {
		if (initTime === 0) {
			display.innerHTML = "";
			display.appendChild(boom);
			return;
		}
		initTime = initTime - 1;
		if (initTime < 4) {
			display.style.color = "red";
		}
		console.log(initTime);
		display.innerHTML = initTime;
	}, 1000);
}
