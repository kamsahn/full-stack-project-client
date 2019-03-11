'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in.')
  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#recipe-div').show()
  store.user = responseData.user
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out.')
  $('form').trigger('reset')
  $('#recipe-content').text('')
  $('#ingredient-content').text('')
  $('#direction-content').text('')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('.resource-div').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  store.user = null
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const failure = () => {
  $('#user-message').text('There was an error.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
