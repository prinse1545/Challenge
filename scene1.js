import React from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import Button from './src/components/button';

const Scene1 = () => {


  return (


    <Image style={styles.background}source={require('./src/components/img/Tropical Background.png')}>
      <View style={styles.container}>
      <StatusBar hidden />
        <Text style={styles.text}>BitByByte</Text>
        <Button />
      </View>
    </Image>


  );
};


const styles = {
  background: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9

  },
  text: {
    fontSize: 40,
    fontFamily: 'Avenir',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 100

  },
  container: {
    margin: 10
  }
};

  export default Scene1;
