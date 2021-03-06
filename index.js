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
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {

  state = {
    previousInputValue: 0,
    inputValue: 0,
    selectedSymbol: null,
  }

  render() {

    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
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
            highlight={this.state.selectedSymbol === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    // alert(input)
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num

    this.setState({
      inputValue: inputValue
    })
  }

  _handleStringInput(str) {
    switch (str) {
      case '.':
        let inputValueInt = parseInt(this.state.inputValue);
        // let newInputValue = inputValueInt.concat("test");

        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: inputValueInt
        });
        break;
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;
    }
  }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);