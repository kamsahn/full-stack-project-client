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

  $('#sign-up-modal').modal('hide')
  $('#sign-in-modal').modal('hide')

  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()

  $('#change-password-btn').show()
  $('#sign-out-form').show()

  $('#get-recipes-form').show()

  store.user = responseData.user
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password.')
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

const signOutSuccess = () => {
  $('form').trigger('reset')

  $('#change-password-btn').hide()
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

  $('.dropdown-menu').removeClass('show')

  $('#intro-message').show()
  const noAuthMessageHtml = noAuthMessageTemplate()
  $('#var-jumbo-message').html(noAuthMessageHtml)
  const noAuthHeadingHtml = noAuthHeadingTemplate()
  $('#var-jumbo-heading').html(noAuthHeadingHtml)

  $('#sign-in-btn').show()
  $('#sign-up-btn').show()

  store.user = null
}

const failure = () => {
  $('#user-message').text('There was an error.')
  $('.modal').modal('hide')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-message').text('')
  }, 5000)
}

$(document).ready(function () {
  $('.modal').on('hidden.bs.modal', function () {
    $('form').trigger('reset')
  })
})

module.exports = {
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
