import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Style from './css/Style';

export default class InputButton extends Component {

  render() {
    console.log("What is this.props from inputButton.js: ", this.props);
    

    return (
      <View style={Style.inputButton}>
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </View>
    )
  }

}