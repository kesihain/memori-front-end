import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

  function HomeScreen({navigation}){
    return (
      <SafeAreaView style={styles.container}>
          <Image
              style={{width: 500, height: 500}}
              source={{uri: 'https://media.giphy.com/media/JotKsFe1MXCWcq7kTT/giphy.gif'}} />
          <View style={styles.btns} >
              <AwesomeButtonRick 
              onPress={() => navigation.navigate("locations")} 
              type="secondary">
              Make
              </AwesomeButtonRick>
              <AwesomeButtonRick 
              onPress={() => navigation.navigate("locations")} 
              type="secondary">
              Remember
              </AwesomeButtonRick>
          </View>
          <View>
              <AwesomeButtonRick 
              onPress={() => navigation.navigate("locations")} 
              type="secondary">
              Locations
              </AwesomeButtonRick>
          </View>
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
      btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    });
    export default HomeScreen