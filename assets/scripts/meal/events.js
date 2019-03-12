'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateMeal = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.meal.recipe_id = store.recipeCreate.id
  formData.meal.ingredient_id = store.ingredientCreate.id
  api.createMeal(formData)
    .then(ui.createMealSuccess)
    .catch(ui.failure)
}

const onUpdateMeal = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateMeal(formData)
    .then(ui.updateMealSuccess)
    .catch(ui.failure)
}

const mealHandler = () => {
  $('#create-meal-form').on('submit', onCreateMeal)
  $('#update-meal-form').on('submit', onUpdateMeal)
}

module.exports = {
  mealHandler
}
