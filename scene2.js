import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Profile from './src/components/profile';
import Related from './src/components/related';

const Scene2 = () => {
  return (
    <ScrollView style={styles.container}>

      <StatusBar hidden={false} />
      <Profile />
      <Related />
      <Related />
      <Related />
      <Related />
      <Related />
      <Related />

    </ScrollView>
  );
};

const styles = {
  container: {
    paddingTop: 50
  },
};

export default Scene2;
