import { call, put, delay, take, fork, cancel } from 'redux-saga/effects';
import axios from 'axios';

import { startFetch, fetchDataSuccess, stopFetching } from '../actions/tableActions';

function* fetchData() {
  try {
    while (true) {
      const res = yield call(axios, { url: 'http://localhost:8000?count=20' });
      yield put(fetchDataSuccess(res.data));
      yield delay(1000);
    }
  } catch (error) {
    console.error(error);
  }
}
export default function* main() {
  while (yield take(startFetch)) {
    const bgSyncTask = yield fork(fetchData);
    
    yield take(stopFetching);
    yield cancel(bgSyncTask);
  }
}
