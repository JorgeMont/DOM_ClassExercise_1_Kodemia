import api from "./api.js";

// console.log(api[0]);


const listPersonajes = (api)=>{
  const personajes = api.map((personaje)=>{
    const {id,name,status,species,type,gender,image} = personaje;
    return {id,name,status,species,type,gender,image};
  });
  
  const lista = document.querySelector('#listaPersonajes');
  
  const createElementos =  personajes.forEach((item) => {
    
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
        const cardBody = document.createElement('div');
        const cardBodyText = document.createElement('p');
    
        card.classList.add('card','shadow');
        cardBody.classList.add('card-body');
        cardImage.classList.add('card-img-top');
        cardBodyText.classList.add('cardText', 'fw-semibold');
            
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        cardBody.appendChild(cardBodyText);
        lista.appendChild(card);
              
        cardImage.src = item.image;
        cardBodyText.innerHTML += `Id:  ${item.id} </br>`;
        cardBodyText.innerHTML += `Name:  ${item.name}</br>`;
        cardBodyText.innerHTML += `Status:  ${item.status}</br>`;
        cardBodyText.innerHTML += `Species:  ${item.species}</br>`;
        cardBodyText.innerHTML += `Type:  ${item.type}</br>`;
        cardBodyText.innerHTML += `Gender: ${item.gender}</br>`; 
      });
    return createElementos;

  }

  listPersonajes(api);