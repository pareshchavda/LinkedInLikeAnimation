import React, {useState} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PopUp = ({modalVisible = false, onClose = () => {}}) => {
  const data = [
    {
      title: 'Like',
      image: <FontAwesome name="thumbs-up" size={24} color="black" />,
    },
    {
      title: 'Celebrate',
      image: <MaterialIcons name="celebration" size={24} color="black" />,
    },
    {
      title: 'Support',
      image: <MaterialIcons name="support" size={24} color="black" />,
    },
    {
      title: 'Love',
      image: (
        <MaterialCommunityIcons name="cards-heart" size={24} color="black" />
      ),
    },
    {
      title: 'Funny',
      image: <Feather name="smile" size={24} color="black" />,
    },
  ];

  const [scaleValues] = useState(data.map(() => new Animated.Value(1)));

  const handlePressIn = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1.2, // Zoom in factor
      friction: 3, // Adjust the speed of the animation
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1, // Return to original size
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onClose}>
        <Pressable onPress={onClose} style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={data}
              horizontal
              keyExtractor={(item, index) => index.toString()}
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
                    {item.image}
                    <Text style={{color: '#000', fontSize: 14}}>
                      {item.title}
                    </Text>
                  </Animated.View>
                </TouchableOpacity>
              )}
              contentContainerStyle={{padding: 10}}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  centeredView: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  zoomIn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 5,
  },
});

export default PopUp;
