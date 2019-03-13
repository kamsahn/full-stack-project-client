'use strict'

const store = require('../store.js')

const createDirectionSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#create-direction-form').hide()
}

const updateDirectionSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#update-direction-form').hide()
  store.dirUpdateDirId = null
}

const deleteDirectionSuccess = () => {
  $('form').trigger('reset')
  store.dirDeleteDirId = null
}

const showCreateDirectionForm = () => {
  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()
  $('#update-direction-form').hide()

  $('#create-direction-form').show()
}

const showUpdateDirectionForm = () => {
  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()
  $('#create-direction-form').hide()

  $('#update-direction-form').show()
}

const failure = () => {
  $('#crud-content').text('')
  $('#user-message').text('Something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  createDirectionSuccess,
  updateDirectionSuccess,
  deleteDirectionSuccess,
  showCreateDirectionForm,
  showUpdateDirectionForm,
  failure
}
