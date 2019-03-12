'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const mealApi = require('../meal/api.js')
const mealUi = require('../meal/ui.js')
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
    .then(() => {
      formData.meal.recipe_id = store.mealCreateRecipeId
      formData.meal.ingredient_id = store.mealIngredientId
      mealApi.createMeal(formData)
        .then(mealUi.createMealSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

// const onGetIngredients = (event) => {
//   event.preventDefault()
//   api.getIngredients({user_id: store.user.id})
//     .then(ui.getIngredientsSuccess)
//     .catch(ui.failure)
// }
//
// const onGetIngredient = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.getIngredient(formData)
//     .then(ui.getIngredientSuccess)
//     .catch(ui.failure)
// }

const onUpdateIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.ingredient.id = store.ingUpdateIngId
  api.updateIngredient(formData)
    .then(ui.updateIngredientSuccess)
    .then(() => {
      formData.meal.id = store.mealUpdateMealeId
      mealApi.updateMeal(formData)
        .then(mealUi.updateMealSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onDeleteIngredient = (event) => {
  event.preventDefault()
  api.deleteIngredient(store.ingDeleteIngId)
    .then(ui.deleteIngredientSuccess)
    .catch(ui.failure)
}

const onStartCreateIngredient = (event) => {
  event.preventDefault()
  ui.showCreateIngredientForm()
  const id = $(event.target).data('id')
  store.mealCreateRecipeId = id
}

const onStartUpdateIngredient = (event) => {
  event.preventDefault()
  ui.showUpdateForms()
  const ingId = $(event.target).parent().data('ing-id')
  store.ingUpdateIngId = ingId
  const mealId = $(event.target).parent().data('meal-id')
  store.mealUpdateMealeId = mealId
}

const onStartDeleteIngredient = (event) => {
  event.preventDefault()
  const ingId = $(event.target).parent().data('ing-id')
  store.ingDeleteIngId = ingId
  onDeleteIngredient(event)
}

const ingredientHandler = () => {
  $('#create-ingredient-form').on('submit', onCreateIngredient)
  // $('#get-ingredients-form').on('submit', onGetIngredients)
  // $('#get-ingredient-form').on('submit', onGetIngredient)
  $('#update-ingredient-form').on('submit', onUpdateIngredient)
  $('#delete-ingredient-form').on('submit', onDeleteIngredient)
  $('#crud-content').on('click', '.btn-add-ing', onStartCreateIngredient)
  $('#crud-content').on('click', '.ing-edit', onStartUpdateIngredient)
  $('#crud-content').on('click', '.ing-del', onStartDeleteIngredient)
}

module.exports = {
  ingredientHandler
}
