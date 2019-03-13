'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const indexRecipeTemplate = require('../templates/recipe-index.handlebars')

const createRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#create-recipe-form').hide()
  $('.btn-create').show()
  store.recipeCreate = responseData.recipe
}

const getRecipesSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#intro-message').hide()
  const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
  $('#crud-content').html(showRecipesHtml)
  $('#intro-message').hide()
  $('#get-recipes-target').hide()

  $('#create-recipe-form').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()
}

const getRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  const indexRecipeHtml = indexRecipeTemplate({ recipe: responseData.recipe })
  $('#crud-content').html(indexRecipeHtml)
  $('#get-recipes-target').show()

  store.mealCreateRecipeId = null
  store.updateRecId = null
  store.deleteRecId = null
  store.dirCreateRecipeId = null
  store.dirUpdateRecId = null
  store.dirDeleteRecId = null

  $('#create-recipe-form').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()
}

const updateRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#update-recipe-form').hide()
  $('.btn-create').show()
}

const deleteRecipeSuccess = () => {
  $('form').trigger('reset')
}

const showCreateRecipeForm = () => {
  $('.btn-create').hide()
  $('#create-recipe-form').show()
}

const showUpdateRecipeForm = () => {
  $('.btn-create').hide()
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
