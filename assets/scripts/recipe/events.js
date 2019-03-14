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
    .then(() => {
      api.getRecipes({user_id: store.user.id})
        .then(ui.getRecipesSuccess)
        .catch(ui.failure)
    })
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
    .then(() => {
      api.getRecipes({user_id: store.user.id})
        .then(ui.getRecipesSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onDeleteRecipe = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRecipe(id)
    .then(ui.deleteRecipeSuccess)
    .then(() => {
      api.getRecipes({user_id: store.user.id})
        .then(ui.getRecipesSuccess)
        .catch(ui.failure)
    })
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
  $('#var-jumbo-message').on('submit', '#get-recipes-form', onGetRecipes)
  $('#get-recipes-target').on('submit', onGetRecipes)
  $('#update-recipe-form').on('submit', onUpdateRecipe)
  $('#content').on('click', '.btn-create', onStartCreateRecipe)
  $('#content').on('click', '.btn-get', onGetRecipe)
  $('#content').on('click', '.btn-update', onStartUpdateRecipe)
  $('#content').on('click', '.btn-rmv', onDeleteRecipe)
}

module.exports = {
  recipeHandler
}
