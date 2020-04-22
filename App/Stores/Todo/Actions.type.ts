export interface ITodo {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export enum ETodoTypes {
  ADD_TODO = 'ADD_TODO',
  SET_TODOS = 'SET_TODOS',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

export interface ISetTodosAction {
  type: typeof ETodoTypes.SET_TODOS;
  payload: ITodo[];
}


export interface IAddTodoAction {
  type: typeof ETodoTypes.ADD_TODO;
  payload: ITodo;
}

export interface IEditTodoAction {
  type: typeof ETodoTypes.EDIT_TODO;
  payload: ITodo;
}
export interface IDeleteTodoAction {
  type: typeof ETodoTypes.DELETE_TODO;
  id: string;
}

export type ITodoActions = ISetTodosAction | IAddTodoAction | IEditTodoAction | IDeleteTodoAction
