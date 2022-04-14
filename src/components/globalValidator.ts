import { IUValidatorOutput, validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms } from './unitValidators.js'
const digitOnlyRegex: RegExp = /^([0-9]|[1-9][0-9])$/
const emailFormatRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

interface IGlobalValidatorOutput {
  valid: boolean,
  invalidInputs: IUValidatorOutput[]
  validInputs: IUValidatorOutput[]
}

function globalValidator (form: FormData): IGlobalValidatorOutput {
  // Get user inputs
  const firstName = form.get('firstName')!.toString()
  const lastName = form.get('lastName')!.toString()
  const emailAddress = form.get('emailAddress')!.toString()
  const birthDate = form.get('birthDate')!.toString()
  const participationOccurence = form.get('participationOccurence')!.toString()
  const cityParticipation = form.get('location')
  const termsCheckbox = form.get('checkboxTCU')

  // Asserts each input and stores the result objects
  const validationBatch: IUValidatorOutput[] = [
    validateFirstName(firstName),
    validateLastName(lastName),
    validateEmail(emailAddress, emailFormatRegex),
    validateBirthDate(birthDate),
    validateOccurence(participationOccurence, digitOnlyRegex),
    validateCity(cityParticipation),
    validateTerms(termsCheckbox)
  ]

  // Initialize the global validator output
  const globalValidatorOutput: IGlobalValidatorOutput = {
    valid: false,
    invalidInputs: validationBatch.filter(input => !input.valid),
    validInputs: validationBatch.filter(input => input.valid)
  }

  if (globalValidatorOutput.invalidInputs.length === 0) globalValidatorOutput.valid = true

  return globalValidatorOutput
}

export default globalValidator
