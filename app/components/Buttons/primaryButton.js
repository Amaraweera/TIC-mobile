import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import {colors} from '../../theme/colors';

const PrimaryButton = ({
  label,
  onPress,
  disable,
  loading,
  backgroundStyle,
  labelStyle,
}) => {
  let buttonStyle = disable
    ? [styles.container, {backgroundColor: '#DFDFDF'}]
    : styles.container;

  return (
    <TouchableOpacity
      style={[buttonStyle, backgroundStyle]}
      disabled={disable || loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text style={[styles.textStyle, labelStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonColors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.textColors.primaryColor,
  },
});

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disable: PropTypes.bool,
  loading: PropTypes.bool,
  backgroundStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PrimaryButton;
