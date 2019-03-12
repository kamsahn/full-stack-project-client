'use strict'

const store = require('../store.js')

const createMealSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully added an ingredient')
  store.mealCreateRecipeId = null
  store.mealIngredientId = null
}

const getMealsSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#crud-content').text('Meals:')
  responseData.meals.forEach(meal => {
    const mealHtml = (`
      <h3>${meal.id}: ${meal.name}</h3>
      <p>${meal.description}</p>
      <p></p>
  `)
    $('#crud-content').append(mealHtml)
  })
}

const getMealSuccess = (responseData) => {
  $('form').trigger('reset')
}

const updateMealSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully updated ingredient')
}

const deleteMealSuccess = () => {
  $('form').trigger('reset')
  $('#crud-content').text('Meal successfully deleted')
}

const failure = () => {
  $('#crud-content').text('')
  $('#user-message').text('Something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  createMealSuccess,
  getMealsSuccess,
  getMealSuccess,
  updateMealSuccess,
  deleteMealSuccess,
  failure
}
