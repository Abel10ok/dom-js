const titulo = document.querySelector(".titulo");

titulo.style.color = "red";

// titulo.classList.add("grande");
// //Podemos agregar una clase que podemos tener creada en css para modificar el elemento.

// titulo.classList.remove("grande");
//remueve la clase grande

let valor = titulo.classList.item(0);
document.write(valor);
//item devuelve la clase del indice especificado

document.write(titulo.classList.contains("titulo"));
//contains verifica si el elemento posee o no, la clase especificada

titulo.classList.toggle("grande");
//toggle si no esta la clase especificada, la agrega, si ya la tiene la elimina

titulo.classList.toggle("grande", true);
//con esto en caso de que la tenga no la elimina

titulo.classList.toggle("grande", false);
//con esto la elimina

titulo.classList.replace("titulo", "grande2");
//replace reemplaza una clase por otra
//si la remplaza devuelve true sino existe devuelve false
