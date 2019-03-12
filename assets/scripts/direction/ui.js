'use strict'

const store = require('../store.js')

const createDirectionSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully created direction')
  $('#crud-content').empty()
  $('#create-direction-form').hide()
  store.dirCreateRecipeId = null
}

// const getDirectionsSuccess = (responseData) => {
//   $('form').trigger('reset')
//   $('#crud-content').text('Directions:')
//   responseData.directions.forEach(direction => {
//     const directionHtml = (`
//       <p>${direction.id}: ${direction.step}</p>
//       <p></p>
//   `)
//     $('#crud-content').append(directionHtml)
//   })
//   store.directions = responseData.directions
// }
//
// const getDirectionSuccess = (responseData) => {
//   $('form').trigger('reset')
//   $('#crud-content').text(responseData.direction.id + ': ' + responseData.direction.step)
// }

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
  // getDirectionsSuccess,
  // getDirectionSuccess,
  updateDirectionSuccess,
  deleteDirectionSuccess,
  showCreateDirectionForm,
  showUpdateDirectionForm,
  failure
}
