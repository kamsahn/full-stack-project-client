'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const indexRecipeTemplate = require('../templates/recipe-index.handlebars')

const createRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created recipe')
  $('#crud-content').text(responseData.recipe.id + ': ' + responseData.recipe.name + ', ' + responseData.recipe.description)
  store.recipeCreate = responseData.recipe
  // use store.recipeCreate.id to access this created recipe's id
  // $('#recipe-div').hide()
  // $('#ingredient-div').show()
}

const getRecipesSuccess = (responseData) => {
  $('form').trigger('reset')
  const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
  $('#crud-content').append(showRecipesHtml)
}

const getRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  const indexRecipeHtml = indexRecipeTemplate({ recipe: responseData.recipe })
  $('#crud-content').html(indexRecipeHtml)
}

const updateRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Updated recipe')
  $('#crud-content').text(responseData.recipe.id + ': ' + responseData.recipe.name + ', ' + responseData.recipe.description)
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
  failure
}
