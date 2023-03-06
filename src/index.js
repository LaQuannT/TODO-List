import { project } from './projects'
import { storeProject } from './storage'
import { createTodo } from './todos'

let calculator = project('calculator')
let task = createTodo(
    'Build add Function',
    'Takes a set if numbers and returns the sum',
    'today',
    3
  ),
  task2 = createTodo(
    'Build subtract function',
    'subtacts number by a number',
    'tomorrow',
    2,
    true
  )
calculator.addTodo(task)
calculator.addTodo(task2)

storeProject(calculator)

calculator.print()
