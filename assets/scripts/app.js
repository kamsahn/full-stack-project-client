'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const recipeEvents = require('./recipe/events.js')
const ingredientEvents = require('./ingredient/events.js')
const directionEvents = require('./direction/events.js')
const mealEvents = require('./meal/events.js')

$(() => {
  $('#recipe-div').hide()

  // $('#meal-div').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()
  $('#delete-ingredient-form').hide()

  $('#direction-div').hide()

  $('#change-password-form').hide()
  $('#sign-out-form').hide()

  authEvents.authHandler()
  recipeEvents.recipeHandler()
  ingredientEvents.ingredientHandler()
  directionEvents.directionHandler()
  mealEvents.mealHandler()
})
