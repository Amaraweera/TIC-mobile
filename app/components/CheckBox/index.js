import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import Images from '../../assets/images';

const CheckBox = ({onToggle, isToggled}) => {
  const checkImage = isToggled ? Images.icons.check_on : Images.icons.check_off;

  return (
    <TouchableOpacity onPress={onToggle}>
      <Image source={checkImage} resizeMode="contain" />
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired,
};

export default CheckBox;
