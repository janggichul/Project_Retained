import React from 'react';
import { useTodoState } from '../Todo/TodoProvider';
import css from './TodoHeader.module.css';

const TodoHeader = () => {
  const todoState = useTodoState();
  const count = todoState.todos.filter((todo) => !todo.isChecked).length;
  return (
    <header>
      <h1 className={css.headerTitle}>
        <mark className={css.todoCount}>{count}</mark>
        개의 할일
      </h1>
    </header>
  );
};

export default TodoHeader;
