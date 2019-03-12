'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createIngredient = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getIngredients = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getIngredient = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/ingredients/${formData.ingredient.id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateIngredient = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/ingredients/${formData.ingredient.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteIngredient = (id) => {
  return $.ajax({
    url: config.apiUrl + `/ingredients/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createIngredient,
  getIngredients,
  getIngredient,
  updateIngredient,
  deleteIngredient
}
