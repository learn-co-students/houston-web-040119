document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonContainer = document.querySelector('#pokemon-container')
  const addPokemonForm = document.querySelector('#pokemon-post-form')

  // getting all pokemons
  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)
    })

    
  addPokemonForm.addEventListener("submit",(e) => {
   //creating new pokemons
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.children[1].value, //e.target[0].value
        "sprites":{
          "front": e.target.children[2].value
        }
      })
    })
    .then((res)=>{return res.json()})
    .then((pokemonObj)=> {
      // e.target.children[1].value = ""
      // e.target.children[2].value = ""
      e.target.reset()
      allPokemonData.push(pokemonObj)
      // debugger
      pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)
    } )

  })

    pokemonContainer.addEventListener('click', (event) =>{
      event.preventDefault()
      //edit and delete a pokemon
      let id = event.target.dataset.id
      if(event.target.dataset.action === "edit"){
        fetch(`http://localhost:3000/pokemon/${id}`,{
          method: "PATCH",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "name": "VIDHI"
          })
  
        })
        .then((res) => {return res.json()})
        .then((obj) => {
          // let pokemon = allPokemonData.filter(pokemon => pokemon.id == id)[0]
          // pokemon.name = obj.name
          // pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)
          
          //SOLUTION FOR THE TASK GIVEN AFTER THE LECTURE

          let pokemon = allPokemonData.filter(pokemon => pokemon.id == id)[0]
          let index = allPokemonData.indexOf(pokemon)
          allPokemonData[index] = obj
          pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)






        })
      }
      if(event.target.dataset.action === "delete"){
      fetch(`http://localhost:3000/pokemon/${event.target.dataset.id}`,{
        method: "DELETE"
      })
      
      .then(() => {
        let pokemons = allPokemonData.filter(pokemon => pokemon.id != id)
        pokemonContainer.innerHTML = renderAllPokemon(pokemons)
      
      } )
      }
     
    } )

})
