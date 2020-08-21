import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';

function EditProfile({navigation}){
    return(
        <SafeAreaView style={styles.profile}>
         <Text>USER profile!</Text>
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

export default EditProfile