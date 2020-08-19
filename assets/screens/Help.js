import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';

function Help({navigation}){
    return(
        <SafeAreaView style={styles.helpscreen}>
         <Text>HERE TO HELP!</Text>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    helpscreen: {
      flex: 1,
      backgroundColor: '#ffe6dd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btns: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf:'stretch',
    },
  });

export default Help