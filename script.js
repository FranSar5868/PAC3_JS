


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

    let results;
    Promise.all(promises)
    .then(response => {
      results = response;
      const container = document.getElementById("container");
      results.forEach((pokemon,i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", `pokemon-container-$(i)`);
        card.setAttribute("data-index",i);
  
        const name = document.createElement("h2");
        name.textContent = pokemon.name;
  
        const image = document.createElement("img");
        image.src = pokemon.sprites.front_default;
        image.setAttribute("alt", pokemon.name);
  
        card.appendChild(name);
        card.appendChild(image);
        container.appendChild(card);
       
      });

      container.addEventListener("click", event => {
        const card = event.target.closest(".card");
        if (card) {
          const pokemon = results[card.getAttribute("data-index")];
          const pokemonId = pokemon.id;
          const baseURL = window.location.origin;
          const new_url = `${baseURL}?PokeId=${pokemonId}`;
          window.location.href = new_url; // Navigate to the URL
        }
      });
      

    })
    .catch(error => console.error(error));
  
  
   