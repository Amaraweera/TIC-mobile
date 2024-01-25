import React from 'react';
import {Rating} from 'react-native-ratings';
import PropTypes from 'prop-types';

const Ratings = ({rate, readonly, onFinishRating}) => {
  return (
    <Rating
      imageSize={20}
      startingValue={rate}
      jumpValue={0.5}
      onFinishRating={onFinishRating}
      readonly={readonly}
      style={{alignItems: 'flex-start'}}
    />
  );
};

Ratings.propTypes = {
  rate: PropTypes.number,
  readonly: PropTypes.bool,
  onFinishRating: PropTypes.func,
};

export default Ratings;
