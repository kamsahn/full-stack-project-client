'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createRecipe = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getRecipes = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getRecipe = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/recipes/${formData.recipe.id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/recipes/${formData.recipe.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteRecipe = (id) => {
  return $.ajax({
    url: config.apiUrl + `/recipes/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe
}
