import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const FirstComponents = () => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
    <Text>Hello World</Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      defaultValue='First Input!'
    />
    <StatusBar style="auto" />
    <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
         <Button
          onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { FirstComponents };

