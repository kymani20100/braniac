import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

 const StartGameScreen= (props) => {
  return (
    <View style={styles.screen}>
        <Text>Start Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 10,
      alignItems:'center',
  }
});

export default StartGameScreen;
