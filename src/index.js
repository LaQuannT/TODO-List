import {
  addProject,
  closeModal,
  exit,
  projectAddBtn,
  renderModal,
  renderPro,
} from './DOM-stuff'
import { project } from './projects'
import { createTodo } from './todos'
import { arrAdd, arrDel } from './utility-functions'

export const allProjects = []
projectAddBtn.addEventListener('click', () => {
  renderModal()
})
exit.addEventListener('click', () => {
  closeModal()
})

const projectName = document.querySelector('#project-name')
const submitBtn = document.querySelector('#submit-project')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(),
    arrAdd(allProjects, projectName.value),
    renderPro(projectName.value)
  closeModal()
})
