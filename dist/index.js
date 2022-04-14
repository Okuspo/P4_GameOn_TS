import Validate from './components/globalValidator.js'
import { addButtonsListeners } from './components/toggleModals.js'
import { handleValid, handleInvalid, resetFormAlerts } from './components/handleValidation.js'

// Handle nav menu responsivity
const navButton = document.getElementById('burger')
navButton.addEventListener('click', () => {
  document.getElementById('myTopnav').classList.toggle('responsive')
})

// Listen to buttons click event
addButtonsListeners()

// Listen to form submit event
const form = document.forms[0]
form.addEventListener('submit', processEvent)

// Handle form submit
function processEvent (event) {
  event.preventDefault()
  resetFormAlerts()
  const formContent = new FormData(form)
  const userInput = Validate(formContent)
  if (!userInput.valid) handleInvalid(userInput.validInputs, userInput.invalidInputs)
  else handleValid(form)
}
