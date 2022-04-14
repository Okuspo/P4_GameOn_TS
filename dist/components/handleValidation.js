import { closeFormModal, openThanksModal } from './toggleModals.js'
function resetFormAlerts () {
  const formFields = document.querySelectorAll('.formData')
  Array.from(formFields).forEach((field) => {
    field.setAttribute('data-error-visible', 'false')
    field.setAttribute('data-valid', 'false')
    field.removeAttribute('data-error')
  })
}
function validInput (validList) {
  validList.forEach((validatorOutput) => {
    const field = document.getElementById(`${validatorOutput.id}Field`)
    if (field) { field.setAttribute('data-valid', 'true') }
  })
}
function invalidInput (invalidList) {
  invalidList.forEach((validatorOutput) => {
    const field = document.getElementById(`${validatorOutput.id}Field`)
    if (field) {
      field.setAttribute('data-error-visible', 'true')
      field.setAttribute('data-error', validatorOutput.error)
    }
  })
}
function handleInvalid (validList, invalidList) {
  validInput(validList)
  invalidInput(invalidList)
}
function handleValid (form) {
  closeFormModal()
  openThanksModal()
  form.reset()
}
export { resetFormAlerts, handleValid, handleInvalid }
