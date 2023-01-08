export type TodoInputStateType = {
  text: string;
};

export type TodoInputActionType =
  | {
      type: 'change';
      payload: string;
    }
  | {
      type: 'clear';
    };

export const TodoInputReducer = (
  state: TodoInputStateType,
  action: TodoInputActionType,
) => {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload,
      };
    case 'clear':
      return {
        text: '',
      };
  }
};
