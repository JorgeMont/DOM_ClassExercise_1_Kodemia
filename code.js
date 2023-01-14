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
  const cardList = document.createElement('ul');
  const nameElem = document.createElement('li');
  const statusElem = document.createElement('li');
  const speciesElem = document.createElement('li');
  const typeElem = document.createElement('li');
  const genderElem = document.createElement('li');
  const cardImage = document.createElement("img");

  //Agregando clases a los divs
  card.classList.add("card");
  cardBody.classList.add("card-body");
  cardImage.classList.add("card-img-top");

  //Ordenando los elementos
  card.appendChild(cardBody);
  card.appendChild(cardImage);
  cardBody.appendChild(cardList);
  elementoLista.appendChild(card);

  //Asignando los valores
  nameElem.textContent = `Name: ${name}`;
  statusElem.textContent = `Status: ${status}`;
  speciesElem.textContent = `Species: ${species}`;  
  typeElem.textContent = `Type: ${type}`;
  genderElem.textContent = `Gender:${gender}`;
  cardImage.src = image;

  //Agregando los elementos al Card
  listaPersonajes.appendChild(elementoLista);
  cardList.appendChild(nameElem);
  cardList.appendChild(statusElem);
  cardList.appendChild(speciesElem);
  cardList.appendChild(typeElem);
  cardList.appendChild(genderElem);
  
});
