export default class Pokemon{

  renderPokemon(pokemon, num){
    return `<div class="pokemon">
              <figure class="pokemon__image">
                <a href="#">
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png">
                </a>
              </figure>
              <div class="pokemon__numer">
                <span class="pokemon__prefix">N.º</span>${num}
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

}