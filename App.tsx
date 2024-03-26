import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LikeButton from './src/component/likeButton';
import Popup from './src/component/popup';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 60}}>
        <LikeButton onLongPress={toggleModal} />
        <LikeButton onLongPress={toggleModal} />
        <LikeButton onLongPress={toggleModal} />
        <LikeButton onLongPress={toggleModal} />
        <LikeButton onLongPress={toggleModal} />
      </View>
      <Popup modalVisible={modalVisible} onClose={toggleModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default App;
