import { all } from 'redux-saga/effects';

import table from './table';

export default function* root() {
  yield all([table()]);
}
