import { call, put } from "redux-saga/effects";
import fetchData from '../api/fetchData';

export function* fetchGitHubUsers(action) {
    let response = {};
    console.log('6', action)
    if (action.query) {
        response = yield call(fetchData.fetchGitHubUsers, action.query);
    } else {
        response.items = [];
    }
    yield put({
        type: 'FETCH_GIT_USERS_LOAD',
        users: response.items,
    });
}

export function* selectGitHubUser(action){
    yield put({
        type: 'SELECT_GIT_HUB_USER_LOAD',
        selectedGitHubUser: action.selectedGitHubUser,
    });
}

