let parrafo = document.getElementById("parrafo");

document.write(parrafo);

let parrafo2 = document.getElementsByName("p"); // lo selecciono por etiqueta p.

document.write(parrafo[0]);
document.write(parrafo[1]);

let parrafo3 = document.querySelector(".parrafo"); // devuelve un elemento el primero que encuentre.

let parrafos = document.querySelectorAll(".parrafo"); // obtiene todos los elemento con esa clase.
