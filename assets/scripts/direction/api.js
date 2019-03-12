'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createDirection = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/directions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateDirection = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/directions/${formData.direction.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteDirection = (id) => {
  return $.ajax({
    url: config.apiUrl + `/directions/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createDirection,
  updateDirection,
  deleteDirection
}
