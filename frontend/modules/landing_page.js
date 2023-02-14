import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log(config.backendEndpoint);
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
    // console.log(key);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let fC = await fetch(config.backendEndpoint + "/cities");
  let data = await fC.json();
  return data;
} catch (err){
  return null;}
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let card = `
  <a href="pages/adventures/?city=${id}">
    <div class="tile card bg-dark text-white" id="${id}">
    
      <img
        class="card-img"
        src="${image}"
        alt="Card image"
      />
      <div class="card-img-overlay">
        
        <h5 class="tile-text card-title text-bottom">${city} </h5>
        <p class="card-text text-center">${description}</p>
      </div>
    </div>
    </a>
  `
  let divElement = document.createElement('div');
  divElement.setAttribute("class", "col-12 col-md-6 col-lg-3 mb-4");
  divElement.innerHTML = card
  let citiesGrid = document.getElementById('data');
  citiesGrid.appendChild(divElement);

}

export { init, fetchCities, addCityToDOM };
