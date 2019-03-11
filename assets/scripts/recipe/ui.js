'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const indexRecipeTemplate = require('../templates/recipe-index.handlebars')

const createRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created recipe')
  $('#create-recipe-form').hide()
  $('#crud-content').empty()
  store.recipeCreate = responseData.recipe
  // use store.recipeCreate.id to access this created recipe's id
  // $('#recipe-div').hide()
  // $('#ingredient-div').show()
}

const showCreateRecipeForm = () => {
  $('#create-recipe-form').show()
}

const showUpdateRecipeForm = () => {
  $('#update-recipe-form').show()
}

const getRecipesSuccess = (responseData) => {
  $('form').trigger('reset')
  const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
  $('#crud-content').html(showRecipesHtml)
}

const getRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  const indexRecipeHtml = indexRecipeTemplate({ recipe: responseData.recipe })
  $('#crud-content').html(indexRecipeHtml)
}

const updateRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Updated recipe')
  $('#update-recipe-form').hide()
  $('#crud-content').empty()
  // store.recipeUpdate = responseData.recipe
  // // use store.recipeUpdate.id to access this updated recipe's id
}

const deleteRecipeSuccess = () => {
  $('form').trigger('reset')
  $('#crud-content').text('Recipe successfully deleted')
}

const failure = () => {
  $('#crud-content').text('')
  $('#user-message').text('Something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  createRecipeSuccess,
  getRecipesSuccess,
  getRecipeSuccess,
  updateRecipeSuccess,
  deleteRecipeSuccess,
  showCreateRecipeForm,
  showUpdateRecipeForm,
  failure
}
