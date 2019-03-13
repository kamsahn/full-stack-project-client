'use strict'

const store = require('../store.js')
const authMessageTemplate = require('../templates/auth-message.handlebars')
const noAuthMessageTemplate = require('../templates/no-auth-message.handlebars')
const authHeadingTemplate = require('../templates/auth-heading.handlebars')
const noAuthHeadingTemplate = require('../templates/no-auth-heading.handlebars')

const signInSuccess = (responseData) => {
  $('form').trigger('reset')
  const authMessageHtml = authMessageTemplate()
  $('#var-jumbo-message').html(authMessageHtml)
  const authHeadingHtml = authHeadingTemplate()
  $('#var-jumbo-heading').html(authHeadingHtml)

  $('#sign-up-form').hide()
  $('#sign-in-form').hide()

  $('#change-password-button').show()
  $('#sign-out-form').show()

  $('#get-recipes-form').show()

  store.user = responseData.user
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
  $('form').trigger('reset')

  $('#change-password-form').hide()
  $('#change-password-button').hide()
  $('#sign-out-form').hide()

  $('#create-recipe-form').hide()
  $('#get-recipes-form').hide()
  $('#get-recipes-target').hide()
  $('#update-recipe-form').hide()

  $('#create-ingredient-form').hide()
  $('#update-ingredient-form').hide()

  $('#create-direction-form').hide()
  $('#update-direction-form').hide()

  $('#crud-content').empty()
  $('#crud-content-indv').empty()
  $('#crud-content-footer').empty()

  $('#intro-message').show()
  const noAuthMessageHtml = noAuthMessageTemplate()
  $('#var-jumbo-message').html(noAuthMessageHtml)
  const noAuthHeadingHtml = noAuthHeadingTemplate()
  $('#var-jumbo-heading').html(noAuthHeadingHtml)

  $('#sign-in-form').show()
  store.user = null
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
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  toSignIn,
  toSignUp,
  showChangeForm,
  failure
}
