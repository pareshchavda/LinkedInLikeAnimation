import React, {useRef, useState} from 'react';
import {TouchableOpacity, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikeButton = ({onLongPress = () => {}}) => {
  const [liked, setLiked] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handleLike = () => {
    setLiked(!liked);

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
        <Icon
          name={liked ? 'heart' : 'heart-o'}
          size={24}
          color={liked ? 'red' : 'black'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default LikeButton;
