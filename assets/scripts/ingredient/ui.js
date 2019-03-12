'use strict'

const store = require('../store.js')

const createIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created ingredient')
  $('#create-ingredient-form').hide()
  $('#crud-content').empty()
  store.mealIngredientId = responseData.ingredient.id
}

const getIngredientsSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#crud-content').text('Ingredients:')
  responseData.ingredients.forEach(ingredient => {
    const ingredientHtml = (`
      <p>${ingredient.id}: ${ingredient.name}</p>
      <p></p>
  `)
    $('#crud-content').append(ingredientHtml)
  })
  store.mealIngredientId = responseData.ingredients.id
}

const getIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#crud-content').text(responseData.ingredient.id + ': ' + responseData.ingredient.name)
}

const updateIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Updated ingredient')
  $('#update-ingredient-form').hide()
  $('#delete-ingredient-form').hide()
  $('#crud-content').empty()
}

const deleteIngredientSuccess = () => {
  $('form').trigger('reset')
  $('#crud-content').text('Ingredient successfully deleted')
}

const showCreateIngredientForm = () => {
  $('#create-ingredient-form').show()
}

const showEditForms = () => {
  $('#update-ingredient-form').show()
  $('#delete-ingredient-form').show()
}

const failure = () => {
  $('#crud-content').text('')
  $('#user-message').text('Something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  createIngredientSuccess,
  getIngredientsSuccess,
  getIngredientSuccess,
  updateIngredientSuccess,
  deleteIngredientSuccess,
  showCreateIngredientForm,
  showEditForms,
  failure
}
