import { closeFormModal, openThanksModal } from './components/modal.js'
import { globalValidator } from './components/globalValidator.js'
import { resetAlerts, showAlerts } from './components/alerts.js'

// Handle nav menu responsivity
const navButton = document.getElementById('burger')!
navButton.addEventListener('click', () => {
  document.getElementById('myTopnav')!.classList.toggle('responsive')
})

// Listen to form submit event
const form: HTMLFormElement = document.forms[0]
form.addEventListener('submit', processEvent)

// Handle form submit
function processEvent (e: Event) {
  e.preventDefault()
  resetAlerts()
  const formContent: FormData = new FormData(document.forms[0])
  const globalValidation = globalValidator(formContent)

  if (!globalValidation.valid) {
    showAlerts(globalValidation.validInputs, globalValidation.invalidInputs)
  } else {
    closeFormModal()
    openThanksModal()
    form.reset()
  }
}
