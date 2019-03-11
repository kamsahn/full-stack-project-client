'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

// accesses all ingredients currently in the store
// does not have the ingredient in question
const ingredientSearch = (newIng, ingList) => {
  const normalizedIngs = []
  ingList.forEach(ing => {
    normalizedIngs.push(ing.name.toLowerCase())
  })
  normalizedIngs.forEach((ing, i) => {
    if (ing === newIng.toLowerCase()) {
      return ingList[i]
    } else {
      return false
    }
  })
}

const onCreateIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createIngredient(formData)
    .then(ui.createIngredientSuccess)
    .catch(ui.failure)
}

const onGetIngredients = (event) => {
  event.preventDefault()
  api.getIngredients({user_id: store.user.id})
    .then(ui.getIngredientsSuccess)
    .catch(ui.failure)
}

const onGetIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getIngredient(formData)
    .then(ui.getIngredientSuccess)
    .catch(ui.failure)
}

// const onGetOrCreateIngredient = (event) => {
//   event.preventDefault()
//   onGetIngredients(event)
//     .then(ui.getIngredientsSuccess)
//     .then(() => {
//       const form = event.target
//       const formData = getFormFields(form)
//       console.log('2:', store.ingredients)
//       const check = ingredientSearch(formData.ingredient.name, store.ingredients)
//       if (check) {
//         api.getIngredient({ingredient_id: check.ingredient_id})
//           .then(ui.getIngredientSuccess)
//           .catch(ui.failure)
//       } else {
//         api.createIngredient(formData)
//           .then(ui.createIngredientSuccess)
//           .catch(ui.failure)
//       }
//     })
//     .then(() => {
//       $('form').trigger('reset')
//     })
//     .catch(ui.failure)
// }

const onUpdateIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateIngredient(formData)
    .then(ui.updateIngredientSuccess)
    .catch(ui.failure)
}

const onDeleteIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteIngredient(formData)
    .then(ui.deleteIngredientSuccess)
    .catch(ui.failure)
}

const ingredientHandler = () => {
  $('#create-ingredient-form').on('submit', onCreateIngredient)
  $('#get-ingredients-form').on('submit', onGetIngredients)
  $('#get-ingredient-form').on('submit', onGetIngredient)
  $('#update-ingredient-form').on('submit', onUpdateIngredient)
  $('#delete-ingredient-form').on('submit', onDeleteIngredient)
}

module.exports = {
  ingredientHandler
}
