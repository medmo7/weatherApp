import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import assetsManager from './src/assets/assetsManager';

import Navigator from "./src/navigation/Navigator"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={assetsManager.COLORS.STATUS_GREEN} />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
})
