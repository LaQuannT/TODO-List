export function createTodo(
  name,
  description,
  dueDate,
  priority = 5,
  completed = false
) {
  return { name, description, dueDate, priority, completed }
}
