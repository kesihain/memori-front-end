import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Settings, ActivityIndicator} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer,} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign'


import HomeScreen from "./assets/screens/Home";
import LocationsScreen from "./assets/screens/LocationsScreen";
import Help from "./assets/screens/Help";
import SettingsScreen from "./assets/screens/SettingsScreen";
import EditProfile from "./assets/screens/EditProfile";


import RootStackScreen from "./assets/screens/RootStackScreen";
import Make from "./assets/screens/Make";


export default function App() {
  const [location, setLocation] = useState([
    { id: 1, name: "Next Academy", latitude:3.1350424, longitude:101.6299529 }
  ]);
  return (
    <locationContext.Provider value={{location,setLocation}}>
      <NavigationContainer>
        {/* <RootStackScreen/> */}
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Help" component={HelpStackScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </locationContext.Provider>
  );
}

const HomeStack = createStackNavigator();
const HelpStack = createStackNavigator();
const MakeStack = createStackNavigator();
const LocationsStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
export const locationContext = React.createContext();


const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#33cccc',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontSize: 35,
      alignSelf: 'center'
    }
    }}>
    <HomeStack.Screen
      name="home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name = "bars"
          color = 'white'
          size = {25} 
          backgroundColor="#33cccc" 
          onPress ={()=> navigation.openDrawer()}>
          </Icon.Button>),
         title: "MEMORI", 
         headerRight: () => (
        <Icon.Button name = "user"
        size = {25} 
        backgroundColor="#33cccc" 
        onPress ={()=> navigation.navigate(EditProfile)}>
        </Icon.Button>
      )}}
    />
    <MakeStack.Screen name="Make" component={Make} options={{ 
      title: "CREATE REMINDERS!", }}/>
    <LocationsStack.Screen name="locations" component={LocationsScreen} options={{ 
      title: "LOCATIONS", }}/>
    <EditProfileStack.Screen name="EditProfile" component={EditProfile} options={{ 
      title: "PROFILE", }}/>
  </HomeStack.Navigator>
)

const HelpStackScreen = ({navigation}) => (
  <HelpStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#3399ff',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontSize: 35,
      alignSelf: 'center'
    }
    }}>
    <HelpStack.Screen 
    name="Help" 
    component={Help} 
    options={{ 
      headerLeft: () => (
        <Icon.Button name = "bars"
        color = 'white'
        size = {25} 
        backgroundColor="#3399ff" 
        onPress ={()=> navigation.openDrawer()}>
        </Icon.Button>),       
      title: "HELP",
      headerRight: () => (
        <Icon.Button name = "user"
        size = {25} 
        backgroundColor="3399ff" 
        onPress ={()=> navigation.navigate(EditProfile)}>
        </Icon.Button>
      )
       }}/>
  </HelpStack.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
});
