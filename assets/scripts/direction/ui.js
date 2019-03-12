'use strict'

const store = require('../store.js')

const createDirectionSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created direction')
  $('#crud-content').empty()
  $('#create-direction-form').hide()
  store.dirCreateRecipeId = null
}

const updateDirectionSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully updated direction')
  $('#crud-content').empty()
  $('#update-direction-form').hide()
  store.dirUpdateDirId = null
}

const deleteDirectionSuccess = () => {
  $('form').trigger('reset')
  $('#user-message').text('Direction successfully deleted')
  $('#crud-content').empty()
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
