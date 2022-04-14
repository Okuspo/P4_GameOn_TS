// DOM Elements
const modalbg: HTMLDivElement = document.querySelector('.bground')!
const formModal = document.getElementById('main-modal')!
const thanksModal = document.getElementById('confirmation-modal')!
const modalBtn: NodeList = document.querySelectorAll('.modal-btn')
const formCloseBtn: HTMLSpanElement = document.getElementById('formClose')!
const thanksCloseBtn: NodeList = document.querySelectorAll('.thanksClose')

// FORM MODAL EVENTS
function addButtonsListeners () {
  modalBtn.forEach((btn) => btn.addEventListener('click', () => {
    modalbg.style.display = 'block'
    formModal.style.display = 'block'
  }))

  formCloseBtn.addEventListener('click', closeFormModal)
  thanksCloseBtn.forEach((btn) => btn.addEventListener('click', () => {
    modalbg.style.display = 'none'
    thanksModal.style.display = 'none'
  }))
}

function closeFormModal () {
  modalbg.style.display = 'none'
  formModal.style.display = 'none'
}

function openThanksModal () {
  modalbg.style.display = 'block'
  thanksModal.style.display = 'flex'
}

export { addButtonsListeners, closeFormModal, openThanksModal }
