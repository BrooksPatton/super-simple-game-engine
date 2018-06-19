const axios = require('axios');

const store = {};

function setup() {
  store.pokeApiUrl = 'http://pokeapi.co/api/v2/pokemon/',
  store.pokemon = {};
  store.loopSpeed = 1000;
  store.highestPokemonId = 807;
}

async function main() {
  const randomPokemon = Math.floor(Math.random() * store.highestPokemonId);
  let pokemon;
  
  if(!store.pokemon[randomPokemon]) {
    pokemon = await axios.get(`store.pokeApiUrl${randomPokemon}`).then(res => res.data).catch(err => {
      console.log(err);
      process.exit();
    });
    console.log("pokemon we got from the api");
    console.log(pokemon);
  } else {
    pokemon = store.pokemon[randomPokemon];
  }

  console.log(`It looks like we caught a ${pokemon.name}!`);
  setTimeout(main, store.loopSpeed);
}

setup();
main();