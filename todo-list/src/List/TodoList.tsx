import css from './TodoList.module.css';
import TodoItem from '../ListItem/TodoItem';
import { useTodoState } from '../Todo/TodoProvider';

const TodoList = () => {
  const todoState = useTodoState();
  return (
    <section>
      <ol className={css.container}>
        {todoState.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
          />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
