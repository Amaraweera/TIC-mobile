import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Images.logos.img_logo} />
      <Text style={styles.title}>TIC APP</Text>
      <Text style={styles.subTitle}>
        Your Preferred Way to Spend the Holiday
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#fcfe2f',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 30,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Start My Jouney</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  title: {
    fontSize: 30,
    color: colors.textColors.primaryColor,
  },
  subTitle: {
    fontSize: 15,
    color: colors.textColors.primaryColor,
  },
  buttonText: {
    fontSize: 20,
    color: colors.primaryColor,
  },
});

export default Welcome;
