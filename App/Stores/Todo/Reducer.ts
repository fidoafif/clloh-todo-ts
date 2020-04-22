import { ITodo, ITodoActions, ETodoTypes } from './Actions.type';

const initialTodoState: ITodo[] = [];

const todoReducer = (
  state = initialTodoState,
  action: ITodoActions
): ITodo[] => {
  switch (action.type) {
    case ETodoTypes.ADD_TODO:
      return [...state, action.payload];
    case ETodoTypes.DELETE_TODO:
      return state.filter(({ id }) => id !== action.id);
    case ETodoTypes.EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload
          };
        } else {
          return todo;
        }
      });
    case ETodoTypes.SET_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export { todoReducer };