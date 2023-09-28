import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets/images';
import { colors } from '../../theme/colors';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09034f'
        }}>
      <View style={{padding: 10}}>
        <Image source={Images.img_logo} style={{height: 75, width: 75}} />
      </View>
      {/* <Text style={{fontSize: 30, color: '#ffff' }}>Login To My Journey</Text> */}
        <TextInput
            style={{width: 250 ,borderColor: colors.secondoryColor, borderWidth: 1, borderRadius: 5, color: colors.textColors.primaryColor, alignSelf: 'center'}}
            onChangeText={() => {}}
            placeholder={'Email / Phone Number'}
            placeholderTextColor={colors.textColors.primaryColor}
            textAlign={'center'}
            value={''}
        />
        <TextInput
            style={{width: 250 ,borderColor: colors.secondoryColor, borderWidth: 1, borderRadius: 5, color: colors.textColors.primaryColor, alignSelf: 'center', marginTop: 5}}
            onChangeText={() => {}}
            placeholder={'Password'}
            placeholderTextColor={colors.textColors.primaryColor}
            textAlign={'center'}
            value={''}
        />
        <TouchableOpacity
            style={{backgroundColor: '#fcfe2f', paddingVertical: 10, paddingHorizontal: 40,borderRadius: 30, marginTop: 10}}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{
                fontSize: 20,
                color: colors.primaryColor,
            }}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;
