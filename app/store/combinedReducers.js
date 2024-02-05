import {combineReducers} from 'redux';
import {BookingReducer} from '../screens/Bookings/redux/reducer';

const rootReducer = combineReducers({
  booking: BookingReducer,
});

const rootReducerWrapper = (state, action) => {
  return rootReducer(state, action);
};

export default rootReducerWrapper;
