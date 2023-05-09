


async function fetchRandomPokemon() {
    const maxNumofPokemons = 1010;
    const pokemonId = Math.floor(Math.random() * maxNumofPokemons) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // return fetch(url)
    //       .then(response => response.json())
    //       .then(data => {
    //         const pokemonName = data.name;
    //         // document.getElementById('pokemon-name').textContent = pokemonName;
    //         return pokemonName;
    //       })
    //       .catch(error => console.error(error));
    }
    
    // const promises = [];
    
    // for (let i = 0; i < 10; i++) {
    // promises.push(fetchRandomPokemon());
    // }

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
  
  
   

    
    // Promise.all(promises)
    // .then(results => {
    //   // Loop through the results and create elements for each value
    //   const container = document.getElementById("container");
    //   results.forEach(value => {
    //     const element = document.createElement("p");
    //     const name = document.createTextNode(value.name);
    //     element.appendChild(name);

    //     // element.textContent = value.name;
    //     // container.appendChild(element);
        
    //     const image = document.createElement("img");
    //     image.setAttribute("src", value.sprites.front_default);
    //     element.appendChild(image);
    //     container.appendChild(element);


    //     console.log(value.sprites.front_default);
    //   });
    // })
    // .catch(error => console.error(error));

  

    // Promise.all(promises)
    // .then(results => {
    //   // Loop through the results and create elements for each value
    //   const container = document.getElementById("container");
    //   results.forEach(value => {
    //     const element = document.createElement("p");
    //     element.textContent = value;
    //     container.appendChild(element);
    //   });
    // })
    // .catch(error => console.error(error));

    // function fetch10Pokemons() {
    //   const promises = [];
    
    //   for (let i = 0; i < 10; i++) {
    //     promises.push(fetchRandomPokemon());
    //   }
    
    //   return Promise.all(promises);
    // }
    