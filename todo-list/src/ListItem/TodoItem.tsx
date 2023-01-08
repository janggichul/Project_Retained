import css from './TodoItem.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useTodoDispatch } from '../Todo/TodoProvider';

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

// const handleToggleClick = (id: number) => {

// };

// const handleRemoveClick = (id: number) => {

// };

const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();

  const handleToggleClick = () => {
    todoDispatch({
      type: 'checked',
      payload: {
        id: props.id,
      },
    });
  };

  const handleRemoveClick = () => {
    todoDispatch({
      type: 'remove',
      payload: {
        id: props.id,
      },
    });
  };
  return (
    <li className={css.container}>
      <BsCheckCircle
        className={
          props.isChecked ? css.checkedCircleIcon : css.unCheckedCircleIcon
        }
        onClick={handleToggleClick}
      />
      <span className={props.isChecked ? css.strikethrough : ''}>
        {props.text}
      </span>
      <IoIosRemoveCircleOutline
        className={css.removeIcon}
        onClick={handleRemoveClick}
      />
    </li>
  );
};

export default TodoItem;
