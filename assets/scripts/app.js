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
  $('#create-recipe-form').hide()
  $('#get-recipes-target').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()

  $('#change-password-form').hide()
  $('#change-password-button').hide()
  $('#sign-out-form').hide()

  authEvents.authHandler()
  recipeEvents.recipeHandler()
  ingredientEvents.ingredientHandler()
  directionEvents.directionHandler()
  mealEvents.mealHandler()
})
