/**
 * Bookings related actions
 */
import * as types from './types';

/** Bookings */
export function bookingAction(payload) {
  return {
    type: types.SUBMIT_BOOKING_SUCCESS,
    payload: payload,
  };
}
