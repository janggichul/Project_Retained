import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import {
  TodoInputActionType,
  TodoInputReducer,
  TodoInputStateType,
} from './TodoInputReducer';
import { TodoActionType, TodoReducer, TodoStateType } from './TodoReducer';
import { Todoload } from './todoStorage';

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateConText = createContext<TodoStateType | null>(null);
const TodoDispatchConText = createContext<Dispatch<TodoActionType> | null>(
  null,
);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext =
  createContext<Dispatch<TodoInputActionType> | null>(null);

export const TodoProvider = (props: TodoProviderProps) => {
  const [inputState, inputDispatch] = useReducer(TodoInputReducer, {
    text: '',
  });
  const [todoState, TodosDispatch] = useReducer(TodoReducer, {
    todos: Todoload(),
  });

  return (
    <TodoStateConText.Provider value={todoState}>
      <TodoDispatchConText.Provider value={TodosDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchConText.Provider>
    </TodoStateConText.Provider>
  );
};

export const useTodoState = () => {
  const value = useContext(TodoStateConText);

  if (!value) {
    throw new Error('canot find useTodoState');
  }
  return value;
};
export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchConText);

  if (!value) {
    throw new Error('canot find usetTodoDispatch');
  }
  return value;
};
export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);

  if (!value) {
    throw new Error('canot find usetInputTodoState');
  }
  return value;
};
export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext);

  if (!value) {
    throw new Error('canot find usetInputTodoDispatch');
  }
  return value;
};
