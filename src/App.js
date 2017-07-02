import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:50,height:50,backgroundColor:"red"}}/>
        <View style={{width:50,height:50,backgroundColor:"yellow",alignSelf:"center"}}/>
        <View style={{width:50,height:50,backgroundColor:"blue"}}/>
        <View style={{width:50,height:50,backgroundColor:"green"}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection:"row",
      justifyContent:"flex-start",//ในแกนหลัก (Flex Directions)
      alignItems: "flex-start", //แกนรอง .. stretch ยืดเต็มแกนรอง
      flexWrap: "wrap", //เกินจะขึ้นบรทัดใหม่
    backgroundColor: 'lightblue',
  }
});
