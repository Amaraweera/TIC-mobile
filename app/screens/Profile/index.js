import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import CacheImage from '../../components/CacheImage';
import {IconButton} from '../../components/Buttons';
import Images from '../../assets/images';
import {USER_DATA} from '../../utils/dummyUser';

const Profile = () => {
  const ScreenWidth = Dimensions.get('window').width;
  const imgWidth = (ScreenWidth - 5 * 6 - 20) / 3;

  const renderImages = ({item, index}) => (
    <TouchableOpacity
      key={index}
      style={styles.ImgContainerStyle}
      onPress={() => console.log('Image clicked')}>
      <CacheImage
        image={item.thumbnailUrl}
        style={{width: imgWidth, height: imgWidth, borderRadius: 5}}
      />
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.summaryContainer}>
      <CacheImage image={USER_DATA.profile} style={styles.imgStyle} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{USER_DATA.name}</Text>
        <Text style={styles.subTitle}>{USER_DATA.location}</Text>
      </View>
      <IconButton
        icon={Images.icons.kebab_menu}
        onPress={() => console.log('Menu clicked')}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={USER_DATA.photos}
        renderItem={renderImages}
        numColumns={3}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  ImgContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
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
  imgStyle: {
    height: 65,
    width: 65,
  },
});

export default Profile;
