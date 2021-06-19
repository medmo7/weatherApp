import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import assetsManager from './src/assets/assetsManager';
import Navigator from "./src/navigation/Navigator"
import { store, persistor } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={assetsManager.COLORS.STATUS_GREEN} />
          <Navigator />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
