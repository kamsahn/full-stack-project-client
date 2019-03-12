'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up.')
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in.')
  $('form').trigger('reset')

  $('#sign-up-form').hide()
  $('#sign-in-form').hide()

  $('#change-password-button').show()
  $('#sign-out-form').show()

  $('#get-recipes-form').show()

  store.user = responseData.user
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password.')
  $('form').trigger('reset')
  $('#change-password-form').hide()
  $('#change-password-button').show()
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out.')
  $('form').trigger('reset')
  $('#change-password-form').hide()
  $('#change-password-button').hide()
  $('#sign-out-form').hide()

  $('#create-recipe-form').hide()
  $('#get-recipes-form').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()

  $('#crud-content').empty()

  $('#sign-in-form').show()
  store.user = null
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const toSignIn = () => {
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
}

const toSignUp = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').show()
}

const showChangeForm = () => {
  $('#change-password-button').hide()
  $('#change-password-form').show()
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
  toSignIn,
  toSignUp,
  showChangeForm,
  failure
}
