export function createTodo(name, dueDate, priority = 5, completed = false) {
  return { name, dueDate, priority, completed }
}
export const addTodos = (project, todo) => {
  project.todos.push(todo)
}
