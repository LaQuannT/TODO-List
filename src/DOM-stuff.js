import { allProjects } from '.'
import { arrAdd, arrDel } from './utility-functions'
import { createProject } from './projects'

// Short hand functions
function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

function addEvent(type, selector, callback, parent = document) {
  parent.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e)
  })
}

function createElements(type, options = {}) {
  const element = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value)
      return
    }
    if (key === 'html') {
      element.innerHTML = value
      return
    }
    if (key === 'text') {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })
  return element
}

// global selectors
const modal = qs('.modal')
const projectModal = qs('#project-modal')

// modal logic
export function showModal() {
  addEvent('click', '.project-title > .fa-square-plus', (e) => {
    modal.style.display = 'block'
    projectModal.style.display = 'block'
  })
}

export function hideModal() {
  addEvent('click', '.close', (e) => {
    modal.style.display = 'none'
    projectModal.style.display = 'none'
  })
}

// project list logic
export function addProject() {
  let projectName = qs('#project-name')
  addEvent('click', '#submit-project', (e) => {
    let project = createProject(projectName.value)
    e.preventDefault(),
      arrAdd(allProjects, project),
      addProjectItem(projectName.value)
  })
}

function addProjectItem(str) {
  const projectList = qs('.project-list')
  const element = createElements('li', {
    html: `${str}
    <span class="del">&times;</span>`,
    'data-key': str,
  })
  projectList.appendChild(element)
}

export function delProject() {
  addEvent(
    'click',
    '.del',
    (e) => {
      arrDel(allProjects, 'name', e.target.closest('li').dataset['key'])
      e.target.closest('li').remove()
    },
    qs('.project-list')
  )
}
