import { project, addProject } from './projects'
import { createTodo, addTodos } from './todos'

export const allProjects = []

let calculator = project('calculator', 'computes math squations')
let task = createTodo('Build add Function', 'today', 3),
  task2 = createTodo('Build subtract function', 'tomorrow', 2, true)

addTodos(calculator, task)
addTodos(calculator, task2)
addProject(calculator)
