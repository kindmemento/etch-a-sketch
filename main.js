let grid = document.querySelector("#form")
let container = document.querySelector("#container")
let input = document.querySelector("#input")
let inputSubmit = document.querySelector("#submit")
let inputReset = document.querySelector("#reset")
let size = document.querySelector(".grid-size");

function makeDiv(size) {
	const div = document.createElement('div')
	div.id = "box"
	div.style.width = `${size}px`
	div.style.height = `${size}px`

	div.onmouseover = (e) => {
		div.classList.add("active")
	}
	return div;
}

function makeGrid () {
	let gridSize = parseInt(document.getElementById("input").value);
	for (let i = 0; i < gridSize; i++) {
	for (let j = 0; j < gridSize; j++) {
	grid.appendChild(makeDiv(grid.clientWidth / gridSize));
		}
	}
}

function reset() {
	while (form.firstChild) {
	form.removeChild(form.lastChild);
	}
}

inputReset.onclick = (e) => {
	reset();
}

inputSubmit.onclick = (e) => {
	let gridSize = parseInt(document.getElementById("input").value);
	let x = gridSize * gridSize

	if (form.firstChild) {
	reset()
	makeGrid(x)

	grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
	grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
	} else {
	makeGrid(x)

	grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
	grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
	}
}