import userSlice from "./slice";
import { Todo } from "./types";

export const addTodo = (todo: Todo) => userSlice.actions.addTodo(todo)

export const deleteTodo = (id: number) => userSlice.actions.deleteTodo(id)

export const toggleTodo = (id: number) => userSlice.actions.toggleTodo(id)
