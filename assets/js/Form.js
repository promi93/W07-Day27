// DICHIARAZIONE VARIABILI

let nameInputReference = document.getElementById("name-field");
let ownerInputReference = document.getElementById("owner-field");
let speciesInputReference = document.getElementById("species-field");
let breedInputReference = document.getElementById("breed-field");
let addBtnReference = document.getElementById("add");
let listReference = document.getElementById("list");

// DICHIARO VARIABILE CON ARRAY VUOTO
let animals = [];

// CLASSE PET
class Pet {
  constructor(name, surname, species, breed) {
    this.petName = name;
    this.ownerName = surname;
    this.species = species;
    this.breed = breed;
  }
}

// RENDERIZZO BROWSER
const renderList = () => {
  listReference.innerHTML = "";
  animals.forEach((type) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span style="color: red"> Nome animale:</span> ${type.petName}; <span style="color: red"> Nome Proprietario:</span> ${type.ownerName};<span style="color: red">  Specie:</span> ${type.species};<span style="color: red">  Razza:</span> ${type.breed}`;
    listReference.appendChild(newLi);
  });
};

// COLLEGAMENTO A HTML
addBtnReference.addEventListener("click", () => {
  let newPets = new Pet(
    nameInputReference.value,
    ownerInputReference.value,
    speciesInputReference.value,
    breedInputReference.value
  );
  animals.push(newPets);
  nameInputReference.value = "";
  ownerInputReference.value = "";
  speciesInputReference.value = "";
  breedInputReference.value = "";
  renderList();
});
