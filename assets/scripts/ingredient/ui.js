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
  $('#create-direction-form').hide()
  $('#update-direction-form').hide()
  $('update-ingredient-form').hide()

  $('#create-ingredient-form').show()
}

const showUpdateForms = () => {
  $('#create-direction-form').hide()
  $('#update-direction-form').hide()
  $('create-ingredient-form').hide()

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
