'use strict'

const store = require('../store.js')

const createMealSuccess = (responseData) => {
  $('form').trigger('reset')
  store.mealIngredientId = null
}

const updateMealSuccess = (responseData) => {
  $('form').trigger('reset')
  store.ingUpdateIngId = null
  store.mealUpdateMealId = null
}

const failure = () => {
  $('#crud-content').text('')
  $('#user-message').text('Something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  createMealSuccess,
  updateMealSuccess,
  failure
}
