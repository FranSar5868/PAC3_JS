


async function fetchRandomPokemon() {
    const maxNumofPokemons = 1010;
    const pokemonId = Math.floor(Math.random() * maxNumofPokemons) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }
    
    

    // I use Set instead of Array for avoiding duplicates in the fetched Pokemons
    const promises = new Set();
    while (promises.size < 10) {
    promises.add(fetchRandomPokemon());
    }


    Promise.all(promises)
    .then(results => {
      const container = document.getElementById("container");
      results.forEach((pokemon,i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", `pokemon-container-$(i)`);
  
        const name = document.createElement("h2");
        name.textContent = pokemon.name;
  
        const image = document.createElement("img");
        image.src = pokemon.sprites.front_default;
        image.setAttribute("alt", pokemon.name);
  
        card.appendChild(name);
        card.appendChild(image);
        container.appendChild(card);
        card.addEventListener("click", () => {
          console.log(`Card clicked for Pokemon with ID ${i}`);
        });
      });
     
      
    })
    .catch(error => console.error(error));
  
  
   