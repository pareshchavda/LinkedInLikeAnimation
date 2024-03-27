import React from 'react';
import Home from './src/screens/home';
import {SelectedImageProvider} from './src/context/selectedImageContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <SelectedImageProvider>
      <GestureHandlerRootView style={styles.flex}>
        <Home />
      </GestureHandlerRootView>
    </SelectedImageProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default App;
