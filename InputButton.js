import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Style from './css/Style';

export default class InputButton extends Component {

  render() {
    console.log("What is this.props from inputButton.js: ", this.props);
    
    return (
      <TouchableHighlight style={Style.inputButton}
                          underlayColor="#193441"
                          onPress={this.props.onPress}>
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }

}