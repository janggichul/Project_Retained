import React, { ChangeEvent, FormEvent } from 'react';
import css from './TodoInput.module.css';
import { RiChatNewLine } from 'react-icons/ri';
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from '../Todo/TodoProvider';

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleTodoOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputState.text) {
      return [];
    }

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text,
      },
    });

    inputDispatch({ type: 'clear' });
  };

  return (
    <section className={css.container}>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="해야할 Todo"
          value={inputState.text}
          onChange={handleTodoOnChange}
        />
        <button type="submit" className={css.enter}>
          <RiChatNewLine />  
                </button>
      </form>
    </section>
  );
};

export default TodoInput;
