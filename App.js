import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.screen}>
      <AssetExample title="Braniac" />
    </View>
  );
}

const styles = StyleSheet.create({
   screen: {
    flex: 1,
  },
});
