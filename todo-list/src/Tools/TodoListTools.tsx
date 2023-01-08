import css from './TodoListTools.module.css';
import { MdDelete } from 'react-icons/md';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { CgRadioCheck } from 'react-icons/cg';
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider';

const TodoListTools = () => {
  const todoState = useTodoState();
  const todoDispatch = useTodoDispatch();

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked();
    todoDispatch({
      type: 'allChecked',
      payload: isAllChecked,
    });
  };

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove',
    });
  };

  return (
    <footer className={css.container}>
      <button className={css.button} onClick={handleToggleAllClick}>
        {isTodoAllChecked() ? (
          <>
            <CgRadioCheck className={css.checkAllIcon} />
            <span>전체해제</span>
          </>
        ) : (
          <>
            <IoCheckmarkCircleOutline className={css.checkAllIcon} />
            <span>전체완료</span>
          </>
        )}
      </button>
      <button
        className={[css.button, css.removeAllButton].join(' ')}
        onClick={handleRemoveAllClick}
      >
        <MdDelete className={css.checkAllIcon} />
        <span>전체삭제</span>
      </button>
    </footer>
  );
};

export default TodoListTools;
