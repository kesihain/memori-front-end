import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }
  
  function Home(){
    return (
      <SafeAreaView style={styles.container}>
        <Text>Memori!</Text>
        <Image
            style={{width: 500, height: 500}}
            source={{uri: 'https://media.giphy.com/media/JotKsFe1MXCWcq7kTT/giphy.gif'}} />
        <StatusBar style="auto" />
      </SafeAreaView> 
    );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
