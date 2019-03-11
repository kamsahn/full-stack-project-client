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

const getDirections = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/directions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getDirection = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/directions/${formData.direction.id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const deleteDirection = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/directions/${formData.direction.id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createDirection,
  getDirections,
  getDirection,
  updateDirection,
  deleteDirection
}
