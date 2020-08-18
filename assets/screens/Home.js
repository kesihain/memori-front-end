import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

  function HomeScreen(){
    return (
      <SafeAreaView style={styles.container}>
        <Image
            style={{width: 500, height: 500}}
            source={{uri: 'https://media.giphy.com/media/JotKsFe1MXCWcq7kTT/giphy.gif'}} />
        <StatusBar style="auto" />
      </SafeAreaView> 
      

    );

    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ffe6dd',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    export default HomeScreen