import API from './api.js'
export default class Pokemon{

  renderPokemon(pokemon)
  {
    return `<div class="pokemon">
              <figure class="pokemon__image">
                <a href="#">
                  <img loading="lazy" src="${pokemon.image}">
                </a>
              </figure>
              <div class="pokemon__numer">
                <span class="pokemon__prefix">N.º</span>${pokemon.nro}
              </div>
              <div class="pokemon__name">
                <h5>${pokemon.name}</h5>
              </div>
            </div>`
  }

  padLeft( number, width )
  {
    width -= number.toString().length;
    if ( width > 0 )
    {
      return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
    }
    return number + "";
  }

  getPokemonsWithImages = (listPokemon) => {
    const objPokemon = new Pokemon()
    const newPokemon = listPokemon.results.map(function(item){
      const res = item.url.split("/");
      const pos = res.indexOf('pokemon');
      const indice = res[pos+1];
      item.nro = objPokemon.padLeft(indice, 3)
      item.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.nro}.png`
      return item
    })

    return newPokemon
  }



  loadPokemons = async () => {
    const api = new API()
    if (localStorage.length > 0) {
      console.log('Consulta al Storage')
      return this.getStoragePokemons()
    } else {
      console.log('Consulta al Api y guarda al Storage')
      const limit = 807
      const offset = 0;
      const listPokemon = await api.getPokemos(offset, limit)
      const pokemons = this.getPokemonsWithImages(listPokemon)
      this.setStoragePokemons(pokemons)
      return this.getStoragePokemons()
    }
  }

  setStoragePokemons = (pokemons) => {
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }

  getStoragePokemons = () => {
    const pokemons = localStorage.getItem('pokemons');
    return JSON.parse(pokemons)
  }




}