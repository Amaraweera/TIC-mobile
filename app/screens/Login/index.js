import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {PrimaryButton} from '../../components/Buttons';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';

const Login = () => {
  const navigation = useNavigation();

  const [password, onChangePassword] = useState('');
  const [email, onChangeEmail] = useState('');

  const onHandleEmail = email => {
    onChangeEmail(email);
  };

  const onHandlePassword = pass => {
    onChangePassword(pass);
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <Image source={Images.logos.img_logo} style={styles.imgStyle} />
      </View>
      <Text style={styles.title}>Travel in Ceylon</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onHandleEmail}
        placeholder={'Email / Phone Number'}
        placeholderTextColor={colors.textColors.primaryColor}
        value={email}
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={onHandlePassword}
        placeholder={'Password'}
        placeholderTextColor={colors.textColors.primaryColor}
        value={password}
        secureTextEntry
      />
      <PrimaryButton
        label="Login"
        onPress={() => navigation.navigate('Dashboard')}
      />
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
  imgStyle: {
    height: 75,
    width: 75,
  },
  inputStyle: {
    width: 250,
    padding: 5,
    borderColor: colors.secondoryColor,
    borderWidth: 1,
    borderRadius: 5,
    color: colors.textColors.primaryColor,
    marginTop: 15,
  },
});

export default Login;
