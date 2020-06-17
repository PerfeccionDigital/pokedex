import API from './api.js'
import Pokemon from './pokemon.js'
const api = new API()
const objPokemon = new Pokemon()


async function fpage(page){
  const limit = 20
  const offset = parseInt(page) * limit;
  const listPokemon = await api.getPokemos(offset, limit)

  for(const index in listPokemon.results){
    let pokemon = listPokemon.results[index]
    let pokemonUrl = pokemon.url

    let res = pokemonUrl.split("/");
    let pos = res.indexOf('pokemon');
    let indice = res[pos+1];


    let num = objPokemon.padLeft(indice, 3)

    const markup = objPokemon.renderPokemon(pokemon, num)
    let container = document.createElement("div");
    container.innerHTML = markup
    document.querySelector('#listPokemon').appendChild(container)
  }
  document.getElementById("page").value = page

}

function iniApp(){
  fpage(0)
}

window.onscroll = function (e) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    const page = parseInt(document.getElementById("page").value) + 1;
    fpage(page)
  }
}
iniApp()
