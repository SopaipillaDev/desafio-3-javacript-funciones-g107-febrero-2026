// EJERCICIO 3

function pintar(elemento, color = "green"){
	elemento.style.backgroundColor =  color;
}

const ele = document.getElementById("ele1");

const ele_2 = document.getElementById("ele2");

ele.addEventListener("click", (event) => pintar(event.target, "yellow"));

ele_2.addEventListener("click", (event) => pintar(event.target));
