export const project = (name) => {
  const todos = []
  return {
    name,
    addTodo: (obj) => todos.push(obj),
    removeTodo: (i) => todos.splice(i, 0),
    print: () => console.table(todos),
  }
}
