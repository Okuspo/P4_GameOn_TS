interface IUValidatorOutput {
  id: string,
  valid: boolean
  error: string
}

function validateFirstName (firstName: string):IUValidatorOutput {
  return {
    id: 'firstName',
    valid: checkStringLength(firstName),
    error: 'Veuillez saisir 2 caractères ou plus pour le prénom.'
  }
}

function validateLastName (lastName: string):IUValidatorOutput {
  return {
    id: 'lastName',
    valid: checkStringLength(lastName),
    error: 'Veuillez saisir 2 caractères ou plus pour le nom.'
  }
}

function validateEmail (emailAddress: string, regex: RegExp):IUValidatorOutput {
  return {
    id: 'emailAddress',
    valid: regex.test(emailAddress),
    error: 'Veuillez saisir une adresse email valide.'
  }
}

function validateBirthDate (birthdate: string):IUValidatorOutput {
  const minAge = 13
  return {
    id: 'birthDate',
    valid: Math.abs(new Date().getTime() - new Date(birthdate).getTime()) / (1000 * 3600 * 24) > (minAge * 365),
    error: `Vous devez avoir ${minAge} ans minimum pour participer.`
  }
}

function validateOccurence (participationOccurence:string, regex:RegExp):IUValidatorOutput {
  return {
    id: 'participationOccurence',
    valid: regex.test(participationOccurence),
    error: 'Veuillez entrer une valeur comprise entre 0 et 99.'
  }
}

function validateCity (cityParticipation: string | File | null):IUValidatorOutput {
  return {
    id: 'cityParticipation',
    valid: cityParticipation !== null,
    error: 'Veuillez sélectionner une ville.'
  }
}

function validateTerms (termsCheckbox: string | File | null): IUValidatorOutput {
  return {
    id: 'terms',
    valid: termsCheckbox !== null,
    error: "Veuillez accepter les conditions d'utilisation"
  }
}

function checkStringLength (string: string): boolean {
  return string.length > 1
}

export { IUValidatorOutput, validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms }
