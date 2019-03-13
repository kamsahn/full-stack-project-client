'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const mealApi = require('../meal/api.js')
const mealUi = require('../meal/ui.js')
const recipeApi = require('../recipe/api.js')
const recipeUi = require('../recipe/ui.js')

// accesses all ingredients currently in the store
// does not have the ingredient in question
const ingredientSearch = (newIng, ingList) => {
  const normalizedIngs = []
  ingList.forEach(ing => {
    normalizedIngs.push(ing.name.toLowerCase())
  })
  normalizedIngs.forEach((ing, i) => {
    if (ing === newIng.toLowerCase()) {
      return ingList[i]
    } else {
      return false
    }
  })
}

const onCreateIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createIngredient(formData)
    .then(ui.createIngredientSuccess)
    .then(() => {
      formData.meal.recipe_id = store.mealCreateRecipeId
      formData.meal.ingredient_id = store.mealIngredientId
      mealApi.createMeal(formData)
        .then(mealUi.createMealSuccess)
        .then(() => {
          recipeApi.getRecipe(store.mealCreateRecipeId)
            .then(recipeUi.getRecipeSuccess)
            .catch(ui.failure)
        })
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onUpdateIngredient = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.ingredient.id = store.ingUpdateIngId
  api.updateIngredient(formData)
    .then(ui.updateIngredientSuccess)
    .then(() => {
      formData.meal.id = store.mealUpdateMealId
      mealApi.updateMeal(formData)
        .then(mealUi.updateMealSuccess)
        .then(() => {
          recipeApi.getRecipe(store.updateRecId)
            .then(recipeUi.getRecipeSuccess)
            .catch(ui.failure)
        })
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onDeleteIngredient = (event) => {
  event.preventDefault()
  api.deleteIngredient(store.ingDeleteIngId)
    .then(ui.deleteIngredientSuccess)
    .then(() => {
      recipeApi.getRecipe(store.deleteRecId)
        .then(recipeUi.getRecipeSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onStartCreateIngredient = (event) => {
  event.preventDefault()
  ui.showCreateIngredientForm()
  const id = $(event.target).data('id')
  store.mealCreateRecipeId = id
}

const onStartUpdateIngredient = (event) => {
  event.preventDefault()
  ui.showUpdateForms()
  const ingId = $(event.target).parent().data('ing-id')
  store.ingUpdateIngId = ingId
  const mealId = $(event.target).parent().data('meal-id')
  store.mealUpdateMealId = mealId
  const recId = $(event.target).parent().parent().data('rec-id')
  store.updateRecId = recId
  console.log(recId)
}

const onStartDeleteIngredient = (event) => {
  event.preventDefault()
  const ingId = $(event.target).parent().data('ing-id')
  store.ingDeleteIngId = ingId
  const recId = $(event.target).parent().parent().data('rec-id')
  store.deleteRecId = recId
  onDeleteIngredient(event)
}

const ingredientHandler = () => {
  $('#create-ingredient-form').on('submit', onCreateIngredient)
  $('#update-ingredient-form').on('submit', onUpdateIngredient)
  $('#delete-ingredient-form').on('submit', onDeleteIngredient)
  $('#content').on('click', '.btn-add-ing', onStartCreateIngredient)
  $('#content').on('click', '.ing-edit', onStartUpdateIngredient)
  $('#content').on('click', '.ing-del', onStartDeleteIngredient)
}

module.exports = {
  ingredientHandler
}
