import { takeLatest, all, takeEvery, take } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions'
import { startup } from './StartupSaga'
import { ETodoTypes } from '../Stores/Todo/Actions.type'
import { doAddTodo, doEditTodo, doDeleteTodo } from './TodoSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

    takeEvery(ETodoTypes.ADD_TODO, doAddTodo),
    takeEvery(ETodoTypes.EDIT_TODO, doEditTodo),
    takeEvery(ETodoTypes.DELETE_TODO, doDeleteTodo),
  ])
}
