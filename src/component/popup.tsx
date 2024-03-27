import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {data} from '../data';

const PopUp = ({modalVisible = false, onClose = () => {}}) => {
  const [scaleValues] = useState(data.map(() => new Animated.Value(1)));

  const handlePressIn = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1.6,
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
  };

  const slideAnim = useRef(new Animated.Value(0)).current;

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
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPressIn={() => handlePressIn(index)}
                onPressOut={() => handlePressOut(index)}
                activeOpacity={1}>
                <Animated.View
                  style={[
                    styles.zoomIn,
                    {transform: [{scale: scaleValues[index]}]},
                  ]}>
                  <Animated.Image
                    source={item.imageUrl}
                    style={[styles.imageStyle]}
                  />
                  <Animated.Text style={styles.textStyle}>
                    {item.title}
                  </Animated.Text>
                </Animated.View>
              </TouchableOpacity>
            )}
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
    borderRadius: 20,
    marginHorizontal: 25,
  },

  zoomIn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 5,
  },

  textStyle: {
    color: '#000',
    fontSize: 14,
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  contentContainerStyle: {
    padding: 10,
  },
});

export default PopUp;
