import React from 'react';
import { Image, Text, TouchableOpacity, } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Button = () => {
  return (
      <TouchableOpacity onPress={() => Actions.two()}>
        <Image style={styles.image} source={require('./img/Start Button.png')}>
          <Text style={styles.text}>Start</Text>
        </Image>
      </TouchableOpacity>


  );
};

const styles = {
  image: {
    opacity: 0.7
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'Avenir',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  }
};


export default Button;
