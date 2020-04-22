import { put, call, take, race } from 'redux-saga/effects'
import { addTodo, editTodo, deleteTodo } from '../Stores/Todo/Actions'
import { ITodo, ETodoTypes } from '../Stores/Todo/Actions.type'

export function* doAddTodo(action) {
  const { payload } = yield take(ETodoTypes.ADD_TODO);
  yield put(addTodo(payload))
}

export function* doEditTodo() {
  const { payload } = yield take(ETodoTypes.EDIT_TODO);
  yield put(editTodo(payload))
}

export function* doDeleteTodo(action) {
  const { id } = yield take(ETodoTypes.DELETE_TODO);
  yield put(deleteTodo(id))
}
