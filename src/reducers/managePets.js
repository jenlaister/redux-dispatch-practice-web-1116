export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return { ...state, pets: [ ...state.pets, action.payload] }
    case 'REMOVE_PET':
      let remove = state.pets.findIndex(pet => pet.id === action.payload)
        return {...state, pets: [...state.pets.slice(0, remove), ...state.pets.slice(remove + 1)]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let el = document.getElementById('container')
  let petsList = state.pets.map(function(pet){
    return `<li>${pet.name}</li>`
    })
    let joinedList = petsList.join(' ')
    el.innerHtml = `<ul>${joinedList}</ul>`
}
