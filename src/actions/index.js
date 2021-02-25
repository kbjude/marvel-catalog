import {
  FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR,
  INCREMENT_OFFSET, FILTER_BY_NAME, FETCH_CHAR_ID, FETCH_DETAIL_PENDING,
  FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR,
} from './constants';

export const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});

export const incrementOffset = increase => ({
  type: INCREMENT_OFFSET,
  increase,
});

export const filterByName = (name, chars) => ({
  type: FILTER_BY_NAME,
  name,
  chars,
});

export const fetchCharID = id => ({
  type: FETCH_CHAR_ID,
  id,
});

export const fetchDetailPending = () => ({
  type: FETCH_DETAIL_PENDING,
});

export const fetchDetailSuccess = detail => ({
  type: FETCH_DETAIL_SUCCESS,
  detail,
});

export const fetchDetailError = error => ({
  type: FETCH_DETAIL_ERROR,
  error,
});
