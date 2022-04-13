function validateFirstName(firstName) {
    return {
        id: 'firstName',
        valid: checkStringLength(firstName)
    };
}
function validateLastName(lastName) {
    return {
        id: 'lastName',
        valid: checkStringLength(lastName)
    };
}
function validateEmail(emailAddress, regex) {
    return {
        id: 'emailAddress',
        valid: regex.test(emailAddress)
    };
}
function validateBirthDate(birthdate) {
    return {
        id: 'birthDate',
        valid: Math.abs(new Date().getTime() - new Date(birthdate).getTime()) / (1000 * 3600 * 24) > 365
    };
}
function validateOccurence(participationOccurence, regex) {
    return {
        id: 'participationOccurence',
        valid: regex.test(participationOccurence)
    };
}
function validateCity(cityParticipation) {
    return {
        id: 'cityParticipation',
        valid: cityParticipation !== null
    };
}
function validateTerms(termsCheckbox) {
    return {
        id: 'terms',
        valid: termsCheckbox !== null
    };
}
function checkStringLength(string) {
    if (string)
        return string.length > 1;
    return false;
}
export { validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms };
