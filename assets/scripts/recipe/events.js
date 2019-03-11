'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateRecipe = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.recipe.user_id = store.user.id
  api.createRecipe(formData)
    .then(ui.createRecipeSuccess)
    .catch(ui.failure)
}

const onGetRecipes = (event) => {
  event.preventDefault()
  api.getRecipes({user_id: store.user.id})
    .then(ui.getRecipesSuccess)
    .catch(ui.failure)
}

const onGetRecipe = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getRecipe(formData)
    .then(ui.getRecipeSuccess)
    .catch(ui.failure)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateRecipe(formData)
    .then(ui.updateRecipeSuccess)
    .catch(ui.failure)
}

// const onDeleteRecipe = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.deleteRecipe(formData)
//     .then(ui.deleteRecipeSuccess)
//     .catch(ui.failure)
// }

const onDeleteRecipe = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRecipe(id)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.failure)
}

const recipeHandler = () => {
  $('#create-recipe-form').on('submit', onCreateRecipe)
  $('#get-recipes-form').on('submit', onGetRecipes)
  $('#get-recipe-form').on('submit', onGetRecipe)
  $('#update-recipe-form').on('submit', onUpdateRecipe)
  $('#delete-recipe-form').on('submit', onDeleteRecipe)
  $('#crud-content').on('click', '.btn-danger', onDeleteRecipe)
}

module.exports = {
  recipeHandler
}
