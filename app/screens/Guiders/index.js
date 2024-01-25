import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Card from '../../components/Card';
import CacheImage from '../../components/CacheImage';
import Ratings from '../../components/Ratings';
import {IconButton} from '../../components/Buttons';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';
import {GUIDERS} from '../../utils/dummyGuiders';

const Guiders = () => {
  const renderGuiders = ({item}) => (
    <Card>
      <View style={styles.summaryContainer}>
        <CacheImage image={item.image} style={styles.imgStyle} />
        <View style={styles.subContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>{item.location}</Text>
          <Ratings rate={item.ratings} readonly />
          <Text style={styles.subTitle}>{item.ratings}</Text>
        </View>
        <IconButton
          icon={Images.icons.kebab_menu}
          onPress={() => console.log('Menu clicked')}
        />
      </View>
      <Text style={styles.subTitle}>{item.description}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={GUIDERS}
        renderItem={renderGuiders}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  summaryContainer: {
    flex: 1,
    marginVertical: 10,
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: colors.textColors.secondoryColor,
  },
  subTitle: {
    fontSize: 12,
    color: colors.textColors.secondoryColor,
  },
  imgStyle: {
    height: 65,
    width: 65,
  },
});

export default Guiders;
