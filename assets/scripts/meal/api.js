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

module.exports = {
  createMeal,
  updateMeal
}
