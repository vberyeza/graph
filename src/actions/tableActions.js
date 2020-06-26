import { createActions } from 'redux-actions';

export const { startFetch, fetchDataSuccess, editData, stopFetching } = createActions({
  START_FETCH: () => {},
  FETCH_DATA_SUCCESS: (data) => data,
  EDIT_DATA: (data) => data,
  STOP_FETCHING: () => {},
});
