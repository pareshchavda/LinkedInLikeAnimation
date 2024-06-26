/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {data} from '../data';
import {theme} from '../common';
import {useSelectedImage} from '../context/selectedImageContext';

const PopUp = ({modalVisible = false, onClose = () => {}}) => {
  const scaleValues = data.map(() => new Animated.Value(1));
  const {selectedImageIndex, setSelectedImageIndex} = useSelectedImage();

  console.log('selectedImageIndex', selectedImageIndex);

  // const handleClose = () => {
  //   onClose();
  //   setLikedIndex(-1);
  // };

  // const handleLike = (index: number) => {
  //   const newLikedIndex = likedIndex === index ? -1 : index;
  //   setLikedIndex(newLikedIndex);

  //   Animated.sequence([
  //     Animated.timing(scaleValues[index], {
  //       toValue: 1.2,
  //       duration: 100,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(scaleValues[index], {
  //       toValue: 1,
  //       duration: 50,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // };

  const handlePressIn = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1.5,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
    const newLikedIndex = selectedImageIndex === index ? -1 : index;
    setSelectedImageIndex(newLikedIndex);

    Animated.sequence([
      Animated.timing(scaleValues[index], {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValues[index], {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      onPressIn={() => handlePressIn(index)}
      onPressOut={() => handlePressOut(index)}
      // onPress={() => handleLike(index)}
      activeOpacity={1}>
      <Animated.View
        style={[styles.zoomIn, {transform: [{scale: scaleValues[index]}]}]}>
        <Animated.Image
          source={item.imageUrl}
          style={[
            styles.imageStyle,
            {tintColor: selectedImageIndex === index ? 'red' : 'black'},
          ]}
        />
        <Animated.Text
          style={[
            styles.textStyle,
            {color: selectedImageIndex === index ? 'red' : 'black'},
          ]}>
          {item.title}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <Pressable onPress={onClose} style={styles.container}>
        <View style={styles.centeredView}>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 120,
    backgroundColor: '#d3d3',
    borderRadius: theme.moderateScale(20),
    marginHorizontal: theme.moderateScale(25),
  },
  zoomIn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.moderateScale(5),
    padding: theme.moderateScale(5),
  },
  textStyle: {
    color: theme.colors.black,
    fontSize: theme.moderateScale(14),
  },
  imageStyle: {
    width: theme.moderateScale(20),
    height: theme.moderateScale(20),
    marginBottom: theme.moderateScale(5),
  },
  contentContainerStyle: {
    padding: theme.moderateScale(10),
  },
});

export default PopUp;
