'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

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

  // responseData.recipes.forEach(recipe => {
  // $('#crud-content').text('Recipes:')
  //   const recipeHtml = (`
  //     <p>${recipe.id}: ${recipe.name}</p>
  //     <p>${recipe.description}</p>
  //     <p></p>
  // `)
  // $('#crud-content').append(recipeHtml)
  // })
}

const getRecipeSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#crud-content').text(responseData.recipe.id + ': ' + responseData.recipe.name + ', ' + responseData.recipe.description)
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
