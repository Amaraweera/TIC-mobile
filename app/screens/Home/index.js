import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>News Feed Here</Text>
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

export default Home;
