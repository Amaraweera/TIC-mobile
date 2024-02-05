import {takeEvery} from 'redux-saga/effects';
import * as types from '../redux/actions/types';
import {bookingSaga} from './BookingsSaga';

export const bookingSagas = [
  takeEvery(types.SUBMIT_BOOKING_SUCCESS, bookingSaga),
];
