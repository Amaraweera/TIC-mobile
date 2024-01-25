import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

import {PrimaryButton} from '../../components/Buttons';
import {IconButton} from '../../components/Buttons';
import Card from '../../components/Card';
import CheckBox from '../../components/CheckBox';
import CountryPicker from '../../components/CountryPicker';
import Ratings from '../../components/Ratings';
import Loading from '../../components/Loading';
import RadioButton from '../../components/RadioButton';
import CacheImage from '../../components/CacheImage';
import Images from '../../assets/images';

const UITest = () => {
  const [isSelected, setToggle] = useState(true);
  const [countryCode, setCountryCode] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Primary Button */}
      <Text style={styles.title}>Primary Button</Text>
      <PrimaryButton
        // disable
        // loading
        label="Button"
        onPress={() => console.log('Button clicked')}
      />

      {/* Icon Button */}
      <Text style={styles.title}>Icon Button</Text>
      <IconButton
        icon={Images.icons.kebab_menu}
        onPress={() => console.log('Icon Button clicked')}
        size={50}
      />

      {/* Card */}
      <Text style={styles.title}>Card</Text>
      <Card>
        <Text>Basic Card</Text>
      </Card>

      {/* CheckBox */}
      <Text style={styles.title}>CheckBox</Text>
      <CheckBox
        isToggled={isSelected}
        onToggle={() => setToggle(!isSelected)}
      />

      {/* CountryPicker */}
      <Text style={styles.title}>CountryPicker</Text>
      <CountryPicker
        countryCode={countryCode}
        onSelect={country => setCountryCode(country.cca2)}
      />

      {/* Ratings */}
      <Text style={styles.title}>Ratings</Text>
      <Ratings
        rate={4}
        onFinishRating={rating => console.log('Rating', rating)}
      />

      {/* Loading */}
      <Text style={styles.title}>Loading</Text>
      <Loading />

      {/* Radio Button */}
      <Text style={styles.title}>Radio Button</Text>
      <RadioButton
        isToggled={isSelected}
        onToggle={() => setToggle(!isSelected)}
      />

      {/* Cache Image - Remote */}
      <Text style={styles.title}>Cache Image - Remote</Text>
      <CacheImage
        style={{width: 200, height: 200}}
        image={'https://source.unsplash.com/random/3840x2160/?cars'}
      />

      {/* Cache Image - Local*/}
      <Text style={styles.title}>Cache Image - Local</Text>
      <CacheImage
        image={Images.loaders.placeholder}
        style={{width: 200, height: 200}}
        isLocalPath
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default UITest;
