import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {theme} from '../common';
import LikeButton from '../component/likeButton';
import Popup from '../component/popup';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomBar}>
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
    backgroundColor: theme.colors.white,
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 60,
  },
  flex: {
    flex: 1,
  },
});

export default Home;
