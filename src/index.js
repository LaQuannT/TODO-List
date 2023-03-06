import { createTodo } from './create-todos'
import { storeTodos } from './store-todos'

let buffer = createTodo(
  'Calculator',
  'returns the sum of given math problems',
  'today',
  5
)

storeTodos(buffer)
