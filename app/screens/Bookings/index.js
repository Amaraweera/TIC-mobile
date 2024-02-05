import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {bookingAction} from './redux/actions/BookingsActions';

const Bookings = () => {
  const dispatch = useDispatch();
  const bookingDispatch = payload => dispatch(bookingAction(payload));

  useEffect(() => {
    const payload = {
      appName: 'TIC',
    };

    bookingDispatch(payload);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  title: {
    fontSize: 20,
  },
});

export default Bookings;
