'use strict'

const store = require('../store.js')

const createIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created ingredient')
  $('#create-ingredient-form').hide()
  $('#crud-content').empty()
  store.mealIngredientId = responseData.ingredient.id
}

const updateIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Updated ingredient')
  $('#update-ingredient-form').hide()
  $('#delete-ingredient-form').hide()
  $('#crud-content').empty()
  store.ingUpdateIngId = null
  store.mealUpdateMealId = null
}

const deleteIngredientSuccess = () => {
  $('form').trigger('reset')
  $('#crud-content').text('Ingredient successfully deleted')
  store.ingDeleteIngId = null
}

const showCreateIngredientForm = () => {
  $('#create-ingredient-form').show()
}

const showUpdateForms = () => {
  $('#update-ingredient-form').show()
}

const failure = () => {
  $('#crud-content').text('')
  $('#user-message').text('Something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  createIngredientSuccess,
  updateIngredientSuccess,
  deleteIngredientSuccess,
  showCreateIngredientForm,
  showUpdateForms,
  failure
}
