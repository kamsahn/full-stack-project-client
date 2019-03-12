'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateDirection = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.direction.recipe_id = store.dirCreateRecipeId
  api.createDirection(formData)
    .then(ui.createDirectionSuccess)
    .catch(ui.failure)
}

// const onGetDirections = (event) => {
//   event.preventDefault()
//   api.getDirections()
//     .then(ui.getDirectionsSuccess)
//     .catch(ui.failure)
// }
//
// const onGetDirection = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.getDirection(formData)
//     .then(ui.getDirectionSuccess)
//     .catch(ui.failure)
// }

const onUpdateDirection = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.direction.id = store.dirUpdateDirId
  api.updateDirection(formData)
    .then(ui.updateDirectionSuccess)
    .catch(ui.failure)
}

const onDeleteDirection = (event) => {
  event.preventDefault()
  api.deleteDirection(store.dirDeleteDirId)
    .then(ui.deleteDirectionSuccess)
    .catch(ui.failure)
}

const onStartCreateDirection = (event) => {
  event.preventDefault()
  ui.showCreateDirectionForm()
  const id = $(event.target).data('id')
  store.dirCreateRecipeId = id
}

const onStartUpdateDirection = (event) => {
  event.preventDefault()
  ui.showUpdateDirectionForm()
  const dirId = $(event.target).parent().data('dir-id')
  store.dirUpdateDirId = dirId
}

const onStartDeleteDirection = (event) => {
  event.preventDefault()
  const dirId = $(event.target).parent().data('dir-id')
  store.dirDeleteDirId = dirId
  onDeleteDirection(event)
}

const directionHandler = () => {
  $('#create-direction-form').on('submit', onCreateDirection)
  // $('#get-directions-form').on('submit', onGetDirections)
  // $('#get-direction-form').on('submit', onGetDirection)
  $('#update-direction-form').on('submit', onUpdateDirection)
  $('#delete-direction-form').on('submit', onDeleteDirection)
  $('#crud-content').on('click', '.btn-add-dir', onStartCreateDirection)
  $('#crud-content').on('click', '.dir-edit', onStartUpdateDirection)
  $('#crud-content').on('click', '.dir-del', onStartDeleteDirection)
}

module.exports = {
  directionHandler
}
