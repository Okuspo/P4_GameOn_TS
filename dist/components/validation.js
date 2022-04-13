import { validateFirstName, validateLastName, validateEmail, validateBirthDate, validateCity, validateOccurence, validateTerms } from './unitValidators';
const digitOnlyRegex = /^([0-9]|[1-9][0-9])$/;
const emailFormatRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export function globalValidator(form) {
    const firstName = form.get('firstName').toString();
    const lastName = form.get('lastName').toString();
    const emailAddress = form.get('emailAddress').toString();
    const birthDate = form.get('birthDate').toString();
    const participationOccurence = form.get('participationOccurence').toString();
    const cityParticipation = form.get('location');
    const termsCheckbox = form.get('checkboxTCU');
    const validationBatch = [
        validateFirstName(firstName),
        validateLastName(lastName),
        validateEmail(emailAddress, emailFormatRegex),
        validateBirthDate(birthDate),
        validateOccurence(participationOccurence, digitOnlyRegex),
        validateCity(cityParticipation),
        validateTerms(termsCheckbox)
    ];
    const globalValidatorOutput = {
        valid: true,
        invalidInputs: [],
        validInputs: []
    };
    validationBatch.forEach(field => {
        if (!field.valid) {
            globalValidatorOutput.valid = false;
            globalValidatorOutput.invalidInputs.push(field.id);
        }
        else
            globalValidatorOutput.validInputs.push(field.id);
    });
    return globalValidatorOutput;
}
