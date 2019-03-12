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
  store.mealCreateRecipeId = null
  store.updateRecId = null
  store.deleteRecId = null
  store.dirCreateRecipeId = null
  store.dirUpdateRecId = null
  store.dirDeleteRecId = null
}

const updateRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully updated recipe')
  $('#update-recipe-form').hide()
  $('#crud-content').empty()
}

const deleteRecipeSuccess = () => {
  $('form').trigger('reset')
  $('#crud-content').text('Recipe successfully deleted')
}

const showCreateRecipeForm = () => {
  $('#create-recipe-form').show()
}

const showUpdateRecipeForm = () => {
  $('#update-recipe-form').show()
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
