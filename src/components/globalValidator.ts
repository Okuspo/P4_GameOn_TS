import { IValidationReturn, validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms } from './unitValidators.js'
const digitOnlyRegex: RegExp = /^([0-9]|[1-9][0-9])$/
const emailFormatRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

interface IGlobalValidatorOutput {
  valid: boolean,
  invalidInputs: string[]
  validInputs: string[]
}

export function globalValidator (form: FormData): IGlobalValidatorOutput {
  // Extract user inputs
  const firstName = form.get('firstName')!.toString()
  const lastName = form.get('lastName')!.toString()
  const emailAddress = form.get('emailAddress')!.toString()
  const birthDate = form.get('birthDate')!.toString()
  const participationOccurence = form.get('participationOccurence')!.toString()
  const cityParticipation = form.get('location')
  const termsCheckbox = form.get('checkboxTCU')

  // Asserts each input and stores the result objects
  const validationBatch: IValidationReturn[] = [
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
    valid: true,
    invalidInputs: [],
    validInputs: []
  }

  // Populate the output
  validationBatch.forEach(field => {
    if (!field.valid) {
      globalValidatorOutput.valid = false
      globalValidatorOutput.invalidInputs.push(field.id)
    } else globalValidatorOutput.validInputs.push(field.id)
  })

  return globalValidatorOutput
}
