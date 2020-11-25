import { useSelector } from 'react-redux';
import { TodoState } from './types';

export const useTodoState = () => {
    return useSelector((state: { todo: TodoState }) => state.todo);
};