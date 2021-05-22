import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Braniac" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
   screen: {
    flex: 1,
  },
});
