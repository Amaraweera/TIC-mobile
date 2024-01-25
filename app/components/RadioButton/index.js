import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import Images from '../../assets/images';

const RadioButton = ({onToggle, isToggled}) => {
  const checkImage = isToggled ? Images.icons.radio_on : Images.icons.radio_off;

  return (
    <TouchableOpacity onPress={onToggle}>
      <Image source={checkImage} resizeMode="contain" />
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired,
};

export default RadioButton;
