


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

    const promises = new Set();
    while (promises.size < 10) {
    promises.add(fetchRandomPokemon());
    }

    Promise.all(promises)
    .then(results => {
      // Loop through the results and create elements for each value
      const container = document.getElementById("container");
      results.forEach(value => {
        const element = document.createElement("p");
        element.textContent = value.name;
        container.appendChild(element);
      });
    })
    .catch(error => console.error(error));

  

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
    
console.dir(promises[0]);