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
  NativeModules,
  View
} from 'react-native';

class reactNative extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}
        onPress={this.call_button.bind(this)}
        >     
          React Native 调用原生方法!
        </Text>

        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>

        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

      </View>
    );
  }
   
   call_button(){

   	 NativeModules.MyNativeModule.rnCallNative('调用原生方法的Demo'); 
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNative', () => reactNative);
