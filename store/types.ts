export type TTodo = {
  text: string
  isCompleted: boolean
  isUrgent: boolean
  id: string
}

export type TTodosStore = {
  todos: TTodo[]
}
