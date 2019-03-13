'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const showRecipesFooterTemplate = require('../templates/recipe-listing-footer.handlebars')
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

  $('#get-recipes-target').hide()

  $('#create-recipe-form').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()

  $('#crud-content-indv').empty()
  const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
  $('#crud-content').html(showRecipesHtml)
  const showRecipesFooterHtml = showRecipesFooterTemplate()
  $('#crud-content-footer').html(showRecipesFooterHtml)
}

const getRecipeSuccess = (responseData) => {
  $('form').trigger('reset')

  store.mealCreateRecipeId = null
  store.updateRecId = null
  store.deleteRecId = null
  store.dirCreateRecipeId = null
  store.dirUpdateRecId = null
  store.dirDeleteRecId = null

  $('#crud-content-footer').empty()

  $('#create-recipe-form').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()

  $('#crud-content').empty()
  const indexRecipeHtml = indexRecipeTemplate({ recipe: responseData.recipe })
  $('#crud-content-indv').html(indexRecipeHtml)
  $('#get-recipes-target').show()
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
