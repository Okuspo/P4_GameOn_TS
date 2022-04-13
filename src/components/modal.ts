// DOM Elements
const modalbg: HTMLDivElement = document.querySelector('.bground')!
const formModal = document.getElementById('main-modal')!
const thanksModal = document.getElementById('confirmation-modal')!
const modalBtn: NodeList = document.querySelectorAll('.modal-btn')
const formCloseBtn: HTMLSpanElement = document.getElementById('formClose')!
const thanksCloseBtn: NodeList = document.querySelectorAll('.thanksClose')

// FORM MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', openFormModal))
formCloseBtn.addEventListener('click', closeFormModal)
thanksCloseBtn.forEach((btn) => btn.addEventListener('click', closeThanksModal))

export function openFormModal () {
  modalbg.style.display = 'block'
  formModal.style.display = 'block'
}

export function closeFormModal () {
  modalbg.style.display = 'none'
  formModal.style.display = 'none'
}

export function openThanksModal () {
  modalbg.style.display = 'block'
  thanksModal.style.display = 'flex'
}

export function closeThanksModal () {
  modalbg.style.display = 'none'
  thanksModal.style.display = 'none'
}
