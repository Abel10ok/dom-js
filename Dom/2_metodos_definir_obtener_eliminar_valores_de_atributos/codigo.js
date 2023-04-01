const rangoEdad = document.querySelector(".rangoEdad");

rangoEdad.setAttribute("type", "text");
//modificar valores de atributo
//sino tiene elatributo lo crea.

let valorAtributo = rangoEdad.getAttribute("type");
//obtenemos el atributo
document.write(valorAtributo);

rangoEdad.removeAttribute("type");
//remueve valor deatributo.
