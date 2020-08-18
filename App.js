import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "home" }}
        />
        <Stack.Screen name="locations" component={LocationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(41, 81, 53)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 70,
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
