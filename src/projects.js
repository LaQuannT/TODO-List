import { allProjects } from './index'

export const project = (name, description) => {
  const todos = []
  return { name, description, todos }
}

export const addProject = (project) => {
  allProjects.push(project)
}
