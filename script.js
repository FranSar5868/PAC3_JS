


async function fetchRandomPokemon() {
    const maxNumofPokemons = 1010;
    const pokemonId = Math.floor(Math.random() * maxNumofPokemons) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    fetch(url)
          .then(response => response.json())
          .then(data => {
            const pokemonName = data.name;
            document.getElementById('pokemon-name').textContent = pokemonName;
          })
          .catch(error => console.error(error));
    }
    

    function fetch10Pokemons() {
      const promises = [];
    
      for (let i = 0; i < 10; i++) {
        promises.push(fetchRandomPokemon());
      }
    
      return Promise.all(promises);
    }
    
