import createReducer from '../../../../utils/createReducer';
import * as types from '../actions/types';

const initialState = {
  data: {},
};

export const BookingReducer = createReducer(initialState, {
  // Agent Types
  [types.SUBMIT_BOOKING_SUCCESS](state, action) {
    return {
      ...state,
      booking: {
        bookingData: action.data,
        error: {},
        isError: false,
      },
    };
  },
});
