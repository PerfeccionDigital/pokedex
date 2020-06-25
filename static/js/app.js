// import API from './api.js'
import Pokemon from './pokemon.js'


// https://codepen.io/hnqv/pen/gmpxrY
// const api = new API()
const objPokemon = new Pokemon()
const pokemons = []
const items = 4


const $listPokemon = document.querySelector('#listPokemon')
// const $searchInput = document.querySelector('.search__input');
// const $suggestions = document.querySelector('.suggestions');



function renderDocument(){
  objPokemon.loadPokemons().then(function(pokemons){
    pokemons.forEach(element => {
      const markup = objPokemon.renderPokemon(element)
      const container = document.createElement("div");
      container.innerHTML = markup
      $listPokemon.appendChild(container)
    });
  })
}



function iniApp(){
  // $searchInput.addEventListener('change', displayMatches);
  // $searchInput.addEventListener('keyup', displayMatches);
  renderDocument()
  // localStorage.clear();

}

iniApp()
