import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchGitHubUsers, selectGitHubUser } from './autoComplete'
// main saga generators
export function* sagas() {
  yield [fork(takeLatest, 'FETCH_GIT_USERS', fetchGitHubUsers),
  fork(takeLatest, 'SELECT_GIT_HUB_USER', selectGitHubUser)];
}
