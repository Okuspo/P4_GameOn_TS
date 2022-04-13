interface IValidationReturn {
  id: string,
  valid: boolean
}

function validateFirstName (firstName: string):IValidationReturn {
  return {
    id: 'firstName',
    valid: checkStringLength(firstName)
  }
}

function validateLastName (lastName: string):IValidationReturn {
  return {
    id: 'lastName',
    valid: checkStringLength(lastName)
  }
}

function validateEmail (emailAddress: string, regex: RegExp):IValidationReturn {
  return {
    id: 'emailAddress',
    valid: regex.test(emailAddress)
  }
}

function validateBirthDate (birthdate: string):IValidationReturn {
  return {
    id: 'birthDate',
    valid: Math.abs(new Date().getTime() - new Date(birthdate).getTime()) / (1000 * 3600 * 24) > 365
  }
}

function validateOccurence (participationOccurence:string, regex:RegExp):IValidationReturn {
  return {
    id: 'participationOccurence',
    valid: regex.test(participationOccurence)
  }
}

function validateCity (cityParticipation: string | File | null):IValidationReturn {
  return {
    id: 'cityParticipation',
    valid: cityParticipation !== null
  }
}

function validateTerms (termsCheckbox: string | File | null): IValidationReturn {
  return {
    id: 'terms',
    valid: termsCheckbox !== null
  }
}

function checkStringLength (string: string): boolean {
  if (string) return string.length > 1
  return false
}

export { IValidationReturn, validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms }
