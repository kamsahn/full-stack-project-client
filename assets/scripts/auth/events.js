'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(() => {
      onSignIn(event)
    })
    .then(() => {
      $('form').trigger('reset')
    })
    .catch(ui.failure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const toSignIn = (event) => {
  event.preventDefault()
  ui.toSignIn()
}

const toSignUp = (event) => {
  event.preventDefault()
  ui.toSignUp()
}

const onShowChangeForm = (event) => {
  event.preventDefault()
  ui.showChangeForm()
}

const authHandler = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('click', '.btn-secondary', toSignIn)
  $('#sign-in-form').on('click', '.btn-secondary', toSignUp)
  $('#change-password-button').on('submit', onShowChangeForm)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-form').on('submit', onSignOut)
}

module.exports = {
  authHandler
}
