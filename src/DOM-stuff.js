import { allProjects } from '.'
import { arrAdd, arrDel } from './utility-functions'
import { createProject } from './projects'
import { createTodo } from './todos'

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
const taskModal = qs('#task-modal')

// modal logic
export function showProjectModal() {
  addEvent('click', '.project-title > .fa-square-plus', (e) => {
    modal.style.display = 'block'
    projectModal.style.display = 'block'
  })
}

export function showTaskModel() {
  addEvent('click', '.add-task', (e) => {
    modal.style.display = 'block'
    taskModal.style.display = 'block'
  })
}
export function hideModal() {
  addEvent('click', '.close', (e) => {
    modal.style.display = 'none'
    projectModal.style.display = 'none'
    taskModal.style.display = 'none'
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

// task logic
export function addTask() {
  addEvent('click', '#submit-task', (e) => {
    e.preventDefault()
    let folder = qs('#tasks-project').value
    let task = createTodo(
      qs('#task-title').value,
      qs('#date').value,
      qs('#priority-levels').value,
      qs('#description').value
    )

    if (index(allProjects, 'name', folder) > -1) {
      arrAdd(allProjects[index(allProjects, 'name', folder)].todos, task)
      addTaskItem(task)
    }
  })
}

function index(arr, key, value) {
  return arr.findIndex((element) => element[key] === value)
}

let num = 3

function addTaskItem(obj) {
  let taskList = qs('.task-list')
  let element = createElements('li', {
    html: ` <div class="task-name">
    <input type="checkbox" id="task-${num}" />
    <label for="task-${num}">${obj.name}</label>
  </div>
  <div class="list-actions">
    <i class="fa-solid fa-circle-info"></i>
    <i class="fa-solid fa-pen task-pen"></i>
    <i class="fa-solid fa-trash task-trash"></i>
  </div>`,
  })
  taskList.appendChild(element)
  num++
}
