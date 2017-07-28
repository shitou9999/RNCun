/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Main from './src/Pager/Special';
// import Main from './src/Pager/Search';
import Main from './src/Commponent/Home/Recommend';



export default class RNCun extends Component {
  render() {
    return (
        <Main />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNCun', () => RNCun);
