/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry, } from 'react-native';
import Scene1 from './scene1';
import Scene2 from './scene2';
import { Scene, Router } from 'react-native-router-flux';


const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='one' component={Scene1} title='one' initial hideNavBar />

        <Scene key='two' component={Scene2} title='Profile' hideNavBar={false} />
      </Scene>
    </Router>
  );
};


AppRegistry.registerComponent('Challenge', () => App);
