'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createMeal = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getMeals = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMeal = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/meals/${formData.meal.id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMeal = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/meals/${formData.meal.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteMeal = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/meals/${formData.meal.id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createMeal,
  getMeals,
  getMeal,
  updateMeal,
  deleteMeal
}
