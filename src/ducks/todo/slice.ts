import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo, TodoState} from "./types";

export const initialState: TodoState = {
    todoList: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const last: Todo = state.todoList.slice(-1)[0]
            const todo = {
                ...action.payload,
                id: last ? last.id + 1: 1,
            }

            state.todoList.push(todo)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const index = state.todoList.findIndex((todo: Todo) => todo.id === action.payload)
            state.todoList.splice(index, 1);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const target = state.todoList.find((todo: Todo) => todo.id === action.payload)
            if (target) {
                target.done = !target.done
            }
        },
    },
});

export default todoSlice;