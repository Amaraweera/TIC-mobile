import React from 'react';
import {TouchableOpacity} from 'react-native';
import {default as Picker} from 'react-native-country-picker-modal';
import PropTypes from 'prop-types';

const CountryPicker = ({countryCode, onSelect}) => {
  return (
    <TouchableOpacity disabled>
      <Picker
        countryCode={countryCode}
        withFlag
        withAlphaFilter={false}
        withFilter
        withCallingCode
        withFlagButton
        onSelect={onSelect}
      />
    </TouchableOpacity>
  );
};

CountryPicker.propTypes = {
  countryCode: PropTypes.string,
  onSelect: PropTypes.func,
};

export default CountryPicker;
