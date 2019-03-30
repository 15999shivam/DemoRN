
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
//import CameraAcm from './src/camera'
//import MapView from 'react-native-maps';
import {WebView} from 'react-native';
import Button from './Button'
import Card from './Card';
import CardSection from './CardSection';
import { Actions } from 'react-native-router-flux';
//import Header from './src/Header';


export default class Home extends Component
{

    onButtonPress() {
       Actions.camera();
    }
    render()
    {
        return (
            <View style={styles.container}>
         <Card>
           <CardSection>
           <Button onPress={this.onButtonPress.bind(this)}>Camera</Button>
           </CardSection>
         </Card>
        <WebView
          originWhitelist={['*']}    
          source={{html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751349614738!2d76.65758911508088!3d30.516086481713227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara+University!5e0!3m2!1sen!2sin!4v1553699433100" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>'}}
          style = {styles.web}
        />
      </View>
   
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
  