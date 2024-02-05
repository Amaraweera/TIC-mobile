import {all} from 'redux-saga/effects';
import {bookingSagas} from '../screens/Bookings/sagas';

function* rootSaga() {
  yield all([...bookingSagas]);
}

export default rootSaga;
