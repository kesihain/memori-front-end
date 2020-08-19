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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#33cccc',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 35,
          alignSelf: 'center'
        }
        }}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "MEMORI" }}
        />
        <Stack.Screen name="locations" component={LocationsScreen} options={{ title: "LOCATIONS" }} />
      </Stack.Navigator>
    </NavigationContainer>
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
