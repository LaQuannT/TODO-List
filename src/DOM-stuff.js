export const projectAddBtn = document.querySelector(
  '.project-title > .fa-square-plus'
)
const modal = document.querySelector('.modal')
const projectModal = document.querySelector('#project-modal')
export const exit = document.querySelector('.close')
const liEl = document.createElement('li')
const projectList = document.querySelector('.project-list')

export function renderModal() {
  ;(modal.style.display = 'block'), (projectModal.style.display = 'block')
}

export function closeModal() {
  modal.style.display = 'none'
  projectModal.style.display = 'none'
}

export function renderPro(name) {
  liEl.innerHTML = `${name}               <span class="list-actions">
   <i class="fa-solid fa-pen"></i>
   <i class="fa-solid fa-trash"></i>
 </span>`
  projectList.appendChild(liEl)
}
