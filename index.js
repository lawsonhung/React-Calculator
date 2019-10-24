/**
 * @format
 */

/************** Source Code ***********/
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/************** Source Code ***********/

import React, { Component } from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

class ReactCalculator extends Component {

  render() {
    return (
      <Text>Hello, React!</Text>
    )
  }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);