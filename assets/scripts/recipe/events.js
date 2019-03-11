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
  const id = $(event.target).data('id')
  api.getRecipe(id)
    .then(ui.getRecipeSuccess)
    .catch(ui.failure)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.recipe.id = store.updateRecipeId
  api.updateRecipe(formData)
    .then(ui.updateRecipeSuccess)
    .catch(ui.failure)
}

const onDeleteRecipe = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRecipe(id)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.failure)
}

const onStartCreateRecipe = (event) => {
  event.preventDefault()
  ui.showCreateRecipeForm()
}

const onStartUpdateRecipe = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  store.updateRecipeId = id
  ui.showUpdateRecipeForm()
}

const recipeHandler = () => {
  $('#create-recipe-form').on('submit', onCreateRecipe)
  $('#get-recipes-form').on('submit', onGetRecipes)
  $('#update-recipe-form').on('submit', onUpdateRecipe)
  $('#crud-content').on('click', '.btn-create', onStartCreateRecipe)
  $('#crud-content').on('click', '.btn-get', onGetRecipe)
  $('#crud-content').on('click', '.btn-update', onStartUpdateRecipe)
  $('#crud-content').on('click', '.btn-danger', onDeleteRecipe)
}

module.exports = {
  recipeHandler
}
