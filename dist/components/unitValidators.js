function validateFirstName (firstName) {
  return {
    id: 'firstName',
    valid: checkStringLength(firstName),
    error: 'Veuillez saisir 2 caractères ou plus pour le prénom.'
  }
}
function validateLastName (lastName) {
  return {
    id: 'lastName',
    valid: checkStringLength(lastName),
    error: 'Veuillez saisir 2 caractères ou plus pour le nom.'
  }
}
function validateEmail (emailAddress, regex) {
  return {
    id: 'emailAddress',
    valid: regex.test(emailAddress),
    error: 'Veuillez saisir une adresse email valide.'
  }
}
function validateBirthDate (birthdate) {
  const minAge = 13
  return {
    id: 'birthDate',
    valid: Math.abs(new Date().getTime() - new Date(birthdate).getTime()) / (1000 * 3600 * 24) > (minAge * 365),
    error: `Vous devez avoir ${minAge} ans minimum pour participer.`
  }
}
function validateOccurence (participationOccurence, regex) {
  return {
    id: 'participationOccurence',
    valid: regex.test(participationOccurence),
    error: 'Veuillez entrer une valeur comprise entre 0 et 99.'
  }
}
function validateCity (cityParticipation) {
  return {
    id: 'cityParticipation',
    valid: cityParticipation !== null,
    error: 'Veuillez sélectionner une ville.'
  }
}
function validateTerms (termsCheckbox) {
  return {
    id: 'terms',
    valid: termsCheckbox !== null,
    error: "Veuillez accepter les conditions d'utilisation"
  }
}
function checkStringLength (string) {
  return string.length > 1
}
export { validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms }
