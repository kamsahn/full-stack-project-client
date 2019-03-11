'use strict'

const store = require('../store.js')

const createIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created ingredient')
  store.ingredientCreate = responseData.ingredient
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
  store.ingredients = responseData.ingredients
}

const getIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#crud-content').text(responseData.ingredient.id + ': ' + responseData.ingredient.name)
}

const updateIngredientSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Updated ingredient')
  $('#crud-content').text(responseData.ingredient.id + ': ' + responseData.ingredient.name)
}

const deleteIngredientSuccess = () => {
  $('form').trigger('reset')
  $('#crud-content').text('Ingredient successfully deleted')
}

const showCreateIngredientForm = () => {
  $('#ingredient-div').show()
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
  failure
}
