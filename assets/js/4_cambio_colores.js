// EJERCICIO 4

 let colorGlobal = 'white'; 

const elemento_1 = document.getElementById("elemento_1");
const elemento_2 = document.getElementById("elemento_2");
const elemento_3 = document.getElementById("elemento_3");
const elemento_4 = document.getElementById("elemento_4");


elemento_1.addEventListener("click", function() {
            this.style.backgroundColor = 'black';
});

elemento_2.addEventListener("click", function() {
            this.style.backgroundColor = 'black';
});

elemento_3.addEventListener("click", function() {
            this.style.backgroundColor = 'black';
});

elemento_4.addEventListener("click", function() {
            this.style.backgroundColor = 'black';
});

const keyDiv = document.getElementById("key");
const contenedorNuevos = document.getElementById("nuevosDivs");

 function crearNuevoDiv(color) {

            const nuevoDiv = document.createElement('div');
            nuevoDiv.style.width = '200px';
            nuevoDiv.style.height = '200px';
            nuevoDiv.style.backgroundColor = color;
            nuevoDiv.style.border = '1px solid black';
            nuevoDiv.style.margin = '5px';
            contenedorNuevos.appendChild(nuevoDiv);
}

// Cambios de color con teclas

 document.addEventListener('keydown', function(event) {
            const tecla = event.key.toLowerCase(); // Convertimos a minúscula por si viene en mayúscula

// Teclas a, s y d
if (tecla === 'a') {
                colorGlobal = 'pink';      // rosado
                keyDiv.style.backgroundColor = colorGlobal;
}
else if (tecla === 's') {
                colorGlobal = 'orange';    // naranjo
                keyDiv.style.backgroundColor = colorGlobal;
} 
else if (tecla === 'd') {
                colorGlobal = 'lightblue'; // celeste
                keyDiv.style.backgroundColor = colorGlobal;
}
           
// Teclas q, w y e
            
else if (tecla === 'q') {
                crearNuevoDiv('purple');   // morado
} 
else if (tecla === 'w') {
                crearNuevoDiv('gray');     // gris
}
else if (tecla === 'e') {
                crearNuevoDiv('brown');    // café
}
});
