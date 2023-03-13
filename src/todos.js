export function createTodo(
  name,
  description,
  dueDate,
  priority = 'High',
  completed = false
) {
  return { name, description, dueDate, priority, completed }
}
