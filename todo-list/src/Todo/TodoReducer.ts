import { TodoSave } from './todoStorage';

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

export type TodoStateType = {
  todos: TodoType[];
};

export type TodoActionType =
  | {
      type: 'add';
      payload: {
        text: string;
      };
    }
  | {
      type: 'remove';
      payload: {
        id: number;
      };
    }
  | {
      type: 'checked';
      payload: {
        id: number;
      };
    }
  | {
      type: 'allChecked';
      payload: boolean;
    }
  | {
      type: 'allRemove';
    };

export const TodoReducer = (state: TodoStateType, action: TodoActionType) => {
  switch (action.type) {
    case 'add': {
      const newTodos = state.todos.concat({
        id: Date.now(),
        text: action.payload.text,
        isChecked: false,
      });
      TodoSave(newTodos);
      return {
        todos: newTodos,
      };
    }
    case 'remove': {
      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });

      TodoSave(newTodos);
      return {
        todos: newTodos,
      };
    }
    case 'checked': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        }
        return todo;
      });
      TodoSave(newTodos);
      return {
        todos: newTodos,
      };
    }

    case 'allChecked': {
      const newTodos = state.todos.map((todo) => {
        return {
          ...todo,
          isChecked: !action.payload,
        };
      });
      TodoSave(newTodos);
      return {
        todos: newTodos,
      };
    }

    case 'allRemove': {
      TodoSave([]);
      return {
        todos: [],
      };
    }
  }
};
