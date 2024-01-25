import React from 'react';
import {View, Image} from 'react-native';

import Images from '../../assets/images';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loaderImage} source={Images.loaders.loader} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderImage: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Loading;
