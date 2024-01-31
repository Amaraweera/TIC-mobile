import {combineReducers} from 'redux';
import {BookingReducer} from '../screens/Bookings/redux/reducer';

export const combinedReducers = combineReducers({
  booking: BookingReducer,
});
