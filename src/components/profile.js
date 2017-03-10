import React from 'react';
import { Image, View, Text } from 'react-native';


const Profile = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/Profile Picture.png')} />
        <View>
          <Text style={styles.text}>Jenny Smith</Text>
        </View>
      </View>

        <Text style={styles.about} >About:</Text>
        <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
         anim id est laborum.
        </Text>
        <View style={styles.relatedContainer}>
          <Text style={styles.relatedText}>Related:</Text>
        </View>
      </View>


  );
};

const styles = {

  container: {
    paddingLeft: 20,
    flexDirection: 'row',
    paddingTop: 25,
  },
  image: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 10
  },
  text: {
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 24,
    fontFamily: 'Avenir',
    color: '#81a1ca',
    fontWeight: 'bold'
  },
  about: {
    paddingTop: 10,
    fontFamily: 'Avenir',
    fontSize: 13,
    textAlign: 'center',
    color: '#81a1ca',
    paddingLeft: 10,
    paddingRight: 10
  },
  relatedContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10
  },
  relatedText: {
    fontFamily: 'Avenir',
    color: '#81a1ca',
    fontWeight: 'bold'
  }

};

export default Profile;
