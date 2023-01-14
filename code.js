import api from "./api.js";

// console.log(api[0]);

const infoPersonajes = api.map((personaje) => {
  const { id, name, status, species, type, gender, image } = personaje;
  return { id, name, status, species, type, gender, image };
});

// Referencia al ul del DOM
const listaPersonajes = document.querySelector('#listaPersonajes');


infoPersonajes.forEach((personaje) => {
    const { id, name, status, species, type, gender, image } = personaje
  //Crear y agregar un elemento por cada personaje
  //Creando elementos necesarios
  const elementoLista = document.createElement("li");
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardImage = document.createElement("img");

  //Agregando clases a los divs
  card.classList.add("card");
  cardBody.classList.add("card-body");
  cardImage.classList.add("card-img-top");

  //Ordenando los elementos
  card.appendChild(cardBody);
  card.appendChild(cardImage);
  elementoLista.appendChild(card);

  cardBody.textContent = name;
  cardImage.src = image;
  listaPersonajes.appendChild(elementoLista);
});
