import React, {useState} from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

import Images from '../../assets/images';

const CacheImage = ({image, style, priority, resizeMode, isLocalPath}) => {
  const [isLoading, setLoading] = useState(false);
  //   const [isError, setError] = useState(false);

  const onError = () => {
    setLoading(false);
    // setError(true);
  };

  const onLoadStart = () => {
    setLoading(true);
    // setError(false);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={{...styles.imageContainer, ...style}}>
      {!isLocalPath ? (
        <FastImage
          fallback={true}
          onError={onError}
          onLoadEnd={onLoadEnd}
          onLoadStart={onLoadStart}
          style={styles.imageStyle}
          source={{
            uri: image,
            priority:
              priority == 'low'
                ? FastImage.priority.normal
                : priority == 'high'
                ? FastImage.priority.high
                : FastImage.priority.normal,
          }}
          resizeMode={
            resizeMode == 'contain'
              ? FastImage.resizeMode.contain
              : resizeMode == 'stretch'
              ? FastImage.resizeMode.stretch
              : resizeMode == 'center'
              ? FastImage.resizeMode.center
              : FastImage.resizeMode.cover
          }
          defaultSource={Images.loaders.placeholder}>
          {isLoading && (
            <ActivityIndicator style={styles.loaderStyle} size={'large'} />
          )}
        </FastImage>
      ) : (
        <Image
          source={image}
          style={styles.imageStyle}
          resizeMode={resizeMode || 'cover'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  loaderStyle: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
  },
});

CacheImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  priority: PropTypes.oneOf(['low', 'normal', 'high']),
  resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'center']),
  // if image load from locally add isLocalPath prop to the component
  isLocalPath: PropTypes.bool,
};

export default CacheImage;
