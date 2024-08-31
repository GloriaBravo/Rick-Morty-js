const txtCharacter = document.getElementById('txt-character');  //input busqueda
const containerCards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async (URL) => {
  const response = await fetch( URL);
  const data = await response.json();
  return data.results;

}

const createCards = (character) => {
  const card = document.createElement('div');
  card.classList.add('card-character');

  const imgCard = document.createElement('img');
  imgCard.src = character.image;
  imgCard.alt = character.name;

  const containerDescription = document.createElement('div');
  containerDescription.classList.add('description-card');

  const nameCharacter = document.createElement('h2');
  nameCharacter.textContent = character.name;
  const genderCharacter = document.createElement('p');
  genderCharacter.textContent = "Gender: " +character.gender;

  containerDescription.appendChild(nameCharacter);
  containerDescription.appendChild(genderCharacter);

  card.appendChild(imgCard);
  card.appendChild(containerDescription);

  containerCards.appendChild(card);

}

const generateAllCharacter = async () => {
  const data = await getApi(URL1);
  data.map(character => createCards(character));
}

const getCharacteByName = async (event) => {
  containerCards.innerHTML = "";
  const data = await getApi(URL2+event.target.value);
  data.map(character => createCards(character));
}

window.addEventListener('DOMContentLoaded', generateAllCharacter);
txtCharacter.addEventListener('keyup' , getCharacteByName);















































































/*const url = "https://rickandmortyapi.com/api/character";
const containerCards = document.querySelector(".cards-container");
const inputListener = document.querySelector("#input-character");

const getCharacters = async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Aquí generamos las 20 tarjetas automáticamente
  data.results.slice(0, 20).forEach(character => makeCharacter(character));
};

const makeCharacter = (myCharacter) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgCard = document.createElement("img");
  imgCard.src = myCharacter.image;
  imgCard.alt = myCharacter.name;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const nameCard = document.createElement("h3");
  nameCard.textContent = myCharacter.name;

  const statusCard = document.createElement("p");
  statusCard.textContent = `Status: ${myCharacter.status}`;

  card.appendChild(imgCard);
  card.appendChild(cardContent);

  cardContent.appendChild(nameCard);
  cardContent.appendChild(statusCard);

  containerCards.appendChild(card);
};

function search() {
  const filterText = inputListener.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(filterText) ? "flex" : "none";
  });
}

window.addEventListener("load", getCharacters);
inputListener.addEventListener("input", search);*/
