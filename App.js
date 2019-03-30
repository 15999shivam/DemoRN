/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
//import { Scene, Router, Actions } from 'react-native-router-flux';
import CameraAcm from './src/camera'
import MapView from 'react-native-maps';
import {WebView} from 'react-native';
import Button from './src/Button'
import Card from './src/Card';
import CardSection from './src/CardSection';
import Header from './src/Header';
import Router from './src/Router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router />
    );
  }

 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  web:{
    backgroundColor :'red'    
  }

});
