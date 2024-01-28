import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import Carousel from 'react-native-reanimated-carousel';

import Card from '../../components/Card';
import CacheImage from '../../components/CacheImage';
import {IconButton} from '../../components/Buttons';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';
import {Feed} from '../../utils/mockData/dummyNewsFeed';

const Home = ({navigation}) => {
  // screenWidth - Card margin & padding
  const carousalWidth = Dimensions.get('window').width - 32 - 24;

  const rederFeed = ({item}) => <CacheImage image={item} />;

  const renderFeed = ({item}) => (
    <Card>
      <View style={styles.summaryContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <CacheImage image={item.profile} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={{...styles.subTitle, paddingLeft: 10}}>
              {moment(item.time).fromNow()}
            </Text>
          </View>
          <Text style={styles.subTitle}>{item.location}</Text>
        </View>
        <IconButton
          icon={Images.icons.kebab_menu}
          onPress={() => console.log('Menu clicked')}
        />
      </View>
      {/* Carousal Images */}
      {item.images.length > 0 && (
        <Carousel
          // autoPlay={true}
          loop={item.images.length > 1}
          width={carousalWidth}
          height={240}
          style={{marginBottom: 10}}
          data={item.images}
          renderItem={rederFeed}
        />
      )}
      <Text style={styles.subTitle}>{item.description}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Feed}
        renderItem={renderFeed}
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
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
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

export default Home;
