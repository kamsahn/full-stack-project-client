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
  $('#create-direction-form').show()
}

const showUpdateDirectionForm = () => {
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
