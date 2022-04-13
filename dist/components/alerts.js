export function resetAlerts() {
    const formFields = document.querySelectorAll('.formData');
    Array.from(formFields).forEach((field) => {
        field.setAttribute('data-error-visible', 'false');
        field.setAttribute('data-valid', 'false');
        field.removeAttribute('data-error');
    });
}
export function showAlerts(validList, invalidList) {
    validInput(validList);
    invalidInput(invalidList);
}
;
function validInput(validList) {
    validList.forEach((id) => {
        const field = document.getElementById(id + 'Field');
        if (field)
            field.setAttribute('data-valid', 'true');
    });
}
function invalidInput(invalidList) {
    const errorMessages = {
        firstName: 'Veuillez entrer 2 caractères ou plus pour le prénom.',
        lastName: 'Veuillez entrer 2 caractères ou plus pour le nom.',
        emailAddress: 'Veuillez entrer une adresse email valide.',
        birthDate: 'Vous devez avoir 1 an minimum pour participer.',
        participationOccurence: 'Veuillez entrer une valeur comprise entre 0 et 99.',
        cityParticipation: 'Veuillez sélectionner une ville.',
        terms: "Veuillez accepter les conditions d'utilisation."
    };
    invalidList.forEach((element) => {
        const field = document.getElementById(`${element}Field`);
        if (field) {
            field.setAttribute('data-error-visible', 'true');
            field.setAttribute('data-error', errorMessages[element]);
        }
    });
}
