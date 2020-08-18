import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
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
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "HOME" }}
        />
        <Stack.Screen name="locations" component={LocationsScreen} />
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

// {
//   <View style={styles.container}>
//     <Text
//       style={styles.text}
//       onPress={() => navigations.navigate(<locationsScreen />)}
//     >
//       what do we do now!!!!
//     </Text>
//     <StatusBar style="auto" />
//   </View>
// }
