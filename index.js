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
  View,
  AppRegistry
} from 'react-native';
import Style from './css/Style';
import InputButton from './InputButton';

// Define the input buttons that will be displayed in the calculator via a 2 dimensional array
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {

  render() {

    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}></View>
        <View style={Style.inputContainer}>
          
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  // For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row
  _renderInputButtons() {
    let views = [];

    for (let r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (let i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton 
            value={input} 
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    alert(input)
  }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);