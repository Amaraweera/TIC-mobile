import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const IconButton = ({onPress, icon, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icon}
        style={{width: size, height: size}}
        resizeMode={'cover'}
      />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  size: 25,
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
};

export default IconButton;
