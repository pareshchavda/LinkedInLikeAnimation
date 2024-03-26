import React from 'react';
import {View, Text, Modal, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PopUp = ({modalVisible = false, onClose = () => {}}) => {
  const data = [
    {
      title: '',
      image: <Icon name="heart" size={24} color="black" />,
    },
    {
      title: '',
      image: <MaterialIcons name="celebration" size={24} color="black" />,
    },
    {
      title: '',
      image: <MaterialIcons name="heart" size={24} color="black" />,
    },
    {
      title: '',
      image: <MaterialIcons name="person" size={24} color="black" />,
    },
    {
      title: '',
      image: <MaterialIcons name="person" size={24} color="black" />,
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={data}
              horizontal
              renderItem={({item, index}) => (
                <Icon
                  onPress={onClose}
                  name="heart"
                  size={24}
                  color="red"
                  style={{margin: 10}}
                />
              )}
              contentContainerStyle={{padding: 10}}
            />
          </View>
        </View>
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
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
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
});

export default PopUp;
