import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Settings } from "react-native";
import LocationsScreen from "./assets/screens/LocationsScreen";
import "react-native-gesture-handler";
import HomeScreen from "./assets/screens/Home";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Help from "./assets/screens/Help";
import SettingsScreen from "./assets/screens/SettingsScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign'
import EditProfile from "./assets/screens/EditProfile";


const HomeStack = createStackNavigator();
const HelpStack = createStackNavigator();
const LocationsStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        backgroundColor="#33cccc" 
        onPress ={()=> navigation.openDrawer()}>
        </Icon.Button>),       
      title: "HELP",
      headerRight: () => (
        <Icon.Button name = "user"
        size = {25} 
        backgroundColor="#33cccc" 
        onPress ={()=> navigation.navigate(EditProfile)}>
        </Icon.Button>
      )
       }}/>
  </HelpStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Help" component={HelpStackScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
});
