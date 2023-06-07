import {
    requestCommentsErrorAction,
    requestCommentsSuccessAction,
    requestPostsErrorAction,
    requestPostsSuccessAction,
    requestUserErrorAction, requestUserSuccessAction
} from "../actions/Actions";
import { call, put, takeEvery, all, delay } from "redux-saga/effects";
import {getComments, getPosts, getUser} from "../api/Api";

function* getPostsWorker() {
    yield delay(2000)
    try {
        const {data} = yield call(getPosts)
        yield put(requestPostsSuccessAction(data))
    } catch (error) {
        yield put(requestPostsErrorAction())
    }
}

function* getPostWatcher() {
    yield takeEvery('REQUESTED_POSTS', getPostsWorker)
}

function* getUserWorker(action) {
    try {
        const {data} = yield call(getUser, action.userId)
        yield put(requestUserSuccessAction(data))
    } catch (error) {
        yield put(requestUserErrorAction())
    }
}

function* getUserWatcher() {
    yield takeEvery('REQUESTED_USER', getUserWorker)
}

function* getCommentsWorker(action) {
    try {
        const {data} = yield call(getComments, action.postId)
        console.log('data', data)
        yield put(requestCommentsSuccessAction(data))
    } catch (error) {
        console.log('error', error)
        yield put(requestCommentsErrorAction())
    }
}

function* getCommentsWatcher() {
    yield takeEvery('REQUESTED_COMMENTS', getCommentsWorker)
}

export const rootSaga = function* root() {
    yield all([
        getPostWatcher(),
        getUserWatcher(),
        getCommentsWatcher()
    ])
}