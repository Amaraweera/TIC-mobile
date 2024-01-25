import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Card = ({children, cardStyle}) => {
  return <View style={[styles.cardContainer, cardStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    borderRadius: 12,
    shadowColor: '#cfcfcf',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 3.8,
    elevation: 3,
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
  cardStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Card;
