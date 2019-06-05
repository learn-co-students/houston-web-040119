import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      displayPets: [], //because we want to create a copy for displaying pet so we don't change the actual pets array
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let url = '/api/pets'

    // if(this.state.filters.type !== 'all'){
    //   url = `/api/pets?type=${this.state.filters.type}`

    //   // url +=  `?type=${this.state.filters.type}`
    // }
    //`/api/pets?type=cat`
    
    if(this.state.pets.length === 0){ //for fetching only once
      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data, 
          displayPets: data //intially display all the pets
        })
      })
    }
    else{
      let pets = this.state.pets.filter(pet => pet.type === this.state.filters.type ) //filter from actual array
      this.setState({
        displayPets: pets //changing display pets
      })
    }
    
  }

  filterPets = () => {
    this.fetchPets()
  }

  changeFilter = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  adoptPet = (id) => {
    let pets = this.state.pets.map(pet => {
      if(pet.id === id){
        // return {...pet, isAdopted: true } 
        pet.isAdopted = true
      }
        return pet
      })

      this.setState({
        pets //pets:pets
      })

    // Refactored code
    // this.setState({
    //   pets:  this.state.pets.map(pet => {
    //     return pet.id === id ? {...pet, isAdopted: true } : pet
    //   }) 
    // })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
            
              <Filters filterPets={this.filterPets} changeFilter={this.changeFilter}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.displayPets} adoptPet={this.adoptPet}/> {/* sending display pets instead of actual pets */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
