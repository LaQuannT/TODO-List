export function createTodo(
  name,
  dueDate,
  priority = 'High',
  description,
  completed = false
) {
  return { name, dueDate, priority, description, completed }
}
