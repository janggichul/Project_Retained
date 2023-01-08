import { TodoType } from '../App';

export const TodoSave = (todos: TodoType[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const Todoload = () => {
  const todoJson = localStorage.getItem('todos');

  if (!todoJson) {
    return [];
  }

  try {
    return JSON.parse(todoJson);
  } catch (e) {
    console.error(e);
    return [];
  }
};
