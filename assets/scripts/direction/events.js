'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const recipeApi = require('../recipe/api.js')
const recipeUi = require('../recipe/ui.js')

const onCreateDirection = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.direction.recipe_id = store.dirCreateRecipeId
  formData.direction.user_id = store.user.id
  api.createDirection(formData)
    .then(ui.createDirectionSuccess)
    .then(() => {
      recipeApi.getRecipe(store.dirCreateRecipeId)
        .then(recipeUi.getRecipeSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onUpdateDirection = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.direction.id = store.dirUpdateDirId
  api.updateDirection(formData)
    .then(ui.updateDirectionSuccess)
    .then(() => {
      recipeApi.getRecipe(store.dirUpdateRecId)
        .then(recipeUi.getRecipeSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onDeleteDirection = (event) => {
  event.preventDefault()
  api.deleteDirection(store.dirDeleteDirId)
    .then(ui.deleteDirectionSuccess)
    .then(() => {
      recipeApi.getRecipe(store.dirDeleteRecId)
        .then(recipeUi.getRecipeSuccess)
        .catch(ui.failure)
    })
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
  const recId = $(event.target).parent().parent().data('rec-id')
  store.dirUpdateRecId = recId
}

const onStartDeleteDirection = (event) => {
  event.preventDefault()
  const dirId = $(event.target).parent().data('dir-id')
  store.dirDeleteDirId = dirId
  const recId = $(event.target).parent().parent().data('rec-id')
  store.dirDeleteRecId = recId
  onDeleteDirection(event)
}

const directionHandler = () => {
  $('#create-direction-form').on('submit', onCreateDirection)
  $('#update-direction-form').on('submit', onUpdateDirection)
  $('#delete-direction-form').on('submit', onDeleteDirection)
  $('#content').on('click', '.btn-add-dir', onStartCreateDirection)
  $('#content').on('click', '.dir-edit', onStartUpdateDirection)
  $('#content').on('click', '.dir-del', onStartDeleteDirection)
}

module.exports = {
  directionHandler
}
