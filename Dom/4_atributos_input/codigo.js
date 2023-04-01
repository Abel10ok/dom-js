const input = document.querySelector(".input-normal");

document.write(input.className);
//nombre de la clase

document.write(input.value);
//value del input

// input.type = "number";
//modificar type desde js

input.accept = "image/png";
//que acepte solo archivos  que solicite con el type file

//form para indicar al input submit el formulario que va a enviar en casod de que este input no este dentro del formulario.

input.minLength = 4;
//minlength la minima cantidad de caracteres que tiene que tener un input

input.setAttribute("minlength", 10);

input.placeholder = "que pasa";
//placeholder

input.required = " ";
//required si es requerido o no
