import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';

function Make({navigation}){
    return(
        <SafeAreaView style={styles.profile}>
         <Text>Create Reminders!</Text>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profile: {
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

export default Make;