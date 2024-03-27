/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {theme} from '../common';
import {useSelectedImage} from '../context/selectedImageContext';
import {Images} from '../assets/images';

const LikeButton = ({onLongPress = () => {}}) => {
  const [liked, setLiked] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const {selectedImageIndex, setSelectedImageIndex} = useSelectedImage();

  useEffect(() => {
    if (liked) {
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [liked, scaleValue]);

  const handleLike = () => {
    setLiked(!liked);
    setSelectedImageIndex(selectedImageIndex !== -1 ? -1 : selectedImageIndex);

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      onPress={handleLike}
      onLongPress={onLongPress}
      style={styles.container}>
      <Animated.View style={{transform: [{scale: scaleValue}]}}>
        <Animated.Image
          source={
            selectedImageIndex === 0
              ? Images.like
              : selectedImageIndex === 1
              ? Images.party
              : selectedImageIndex === 2
              ? Images.handshake
              : selectedImageIndex === 3
              ? Images.heart
              : selectedImageIndex === 4
              ? Images.happy
              : Images.like
          }
          style={[
            styles.imageStyle,
            {tintColor: selectedImageIndex !== -1 || liked ? 'red' : 'black'},
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.moderateScale(10),
  },
  imageStyle: {
    width: theme.moderateScale(20),
    height: theme.moderateScale(20),
    marginBottom: theme.moderateScale(5),
  },
});

export default LikeButton;
