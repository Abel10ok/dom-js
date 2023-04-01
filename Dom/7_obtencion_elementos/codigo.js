const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent;
// document.write(resultado);
//textContent devuelve el texto de cualquier nodo aunque tengo stylo no visible
//pero no nos devuelve las etiqueta de adentro

let resultad2 = titulo.innerText; //tampoco se usa
// document.write(resultad2);
//devuelve el texto visible de un nodo element

let resultad3 = titulo.outerText; // no se usa mas
// document.write(resultad3);
//outerText devuelve el texto que de las etiquetas HTML incluidas las etiquetas.

let resultad4 = titulo.innerHTML;
console.log(resultad4);
//innerHTML devuelve el contenido HTML de un elemento.
