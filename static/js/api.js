export default class API {
  async getPokemos(offset, limit){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    const data = await response.json()
    return data
  }
}