import React from 'react';
import { View, Image, Text } from 'react-native';


const Related = () => {
  return (
    <View style={styles.card}>
        <View style={styles.image}>
          <Image source={require('./img/Profile Picture.png')} />
        </View>

        <View>
          <Text style={styles.text}>John Doe</Text>
          <View style={styles.subheadingContainer}>
            <Text style={styles.placesText}>Places:</Text>
            <View style={styles.smallText}>
              <Text style={styles.subheadingText}>France</Text>
              <Text style={styles.subheadingText}>Brazil</Text>
              <Text style={styles.subheadingText}>Italy</Text>
            </View>
          </View>
        </View>

        <View style={styles.followButton}>
            <Text style={styles.button}>+Follow</Text>
        </View>
    </View>

  );
};

const styles = {
  card: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 10,
    borderBottomColor: '#4682B4',
    borderBottomWidth: 0.75,
    height: 150
  },
  text: {
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 18,
    fontFamily: 'Avenir',
    color: '#81a1ca'
  },
  placesText: {
    paddingLeft: 15,
    fontFamily: 'Avenir',
    color: '#81a1ca'

  },
  image: {
    paddingBottom: 20
  },
  button: {
    borderRadius: 5,
    borderColor: '#1E90FF',
    borderWidth: 1,
    height: 30,
    width: 75,
    textAlign: 'center',
    paddingTop: 5,
    color: '#1E90FF',
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  followButton: {
    paddingLeft: 70,
    paddingTop: 30
  },
  smallText: {
    paddingLeft: 10,
    paddingTop: 2
  },
  subheadingContainer: {
    flexDirection: 'row'
  },
  subheadingText: {
    fontFamily: 'Avenir',
    fontSize: 13,
    color: '#81a1ca'

  }
};


export default Related;
