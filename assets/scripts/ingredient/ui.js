'use strict'

const store = require('../store.js')

const createIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#create-ingredient-form').hide()
  store.mealIngredientId = responseData.ingredient.id
}

const updateIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#update-ingredient-form').hide()
}

const deleteIngredientSuccess = () => {
  $('form').trigger('reset')
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
