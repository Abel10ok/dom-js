const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI"); //js es case sensitive tiene que ser en mayuscula
//createElement crea elementos

document.write(item);
console.log(item);

const textoDelItem = document.createTextNode("Item de la lista");
console.log(textoDelItem);
//createTextNode es para crear un nodo de texto

item.appendChild(textoDelItem);
contenedor.appendChild(item);
//colocar nodo dentro de otro

const item2 = document.createElement("LI");
item2.innerText = "otra forma";
contenedor.appendChild(item2);
//otra forma

const fragmento = document.createDocumentFragment();
for (i = 0; i < 10; i++) {
  const item = document.createElement("LI");
  item.innerText = "fragment";
  fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);
//createDocumentFragment para crear y agregar mas elementos sin consumira tantos recursos
