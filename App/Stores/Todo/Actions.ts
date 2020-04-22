import { ITodo, ITodoActions, ETodoTypes } from './Actions.type';

import uuid from 'uuid'

export const addTodo = (data: { title: string, description: string }): ITodoActions => {
  const entry: ITodo = {
    id: uuid(),
    ...data,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  }

  return ({
    type: ETodoTypes.ADD_TODO,
    payload: entry
  })
};

export const deleteTodo = (id: string): ITodoActions => ({
  type: ETodoTypes.DELETE_TODO,
  id
});

export const editTodo = (data: ITodo): ITodoActions => ({
  type: ETodoTypes.EDIT_TODO,
  payload: data
});

export const setTodos = (data: ITodo[]): ITodoActions => ({
  type: ETodoTypes.SET_TODOS,
  payload: data
});

