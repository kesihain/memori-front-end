import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import AsyncStorage from "@react-native-community/async-storage";

function HomeScreen({ navigation }) {
  AsyncStorage.getItem('@jwt').then(result=>{
    console.log(result)
  })
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 500, height: 500 }}
        source={{
          uri: "https://media.giphy.com/media/JotKsFe1MXCWcq7kTT/giphy.gif",
        }}
      />
      <View style={styles.btns}>
        <AwesomeButtonRick
          onPress={() => navigation.navigate("Make")}
          type="secondary"
          width = {150}
        >
          Make
        </AwesomeButtonRick>
        <AwesomeButtonRick
          onPress={() => navigation.navigate("remember")}
          type="secondary"
          title="Remember"
          width = {150}
        >
          Remember
        </AwesomeButtonRick>
      </View>
      <AwesomeButtonRick
        onPress={() => navigation.navigate("locations")}
        type="secondary"
        width = {150}
      >
        Locations
      </AwesomeButtonRick>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    margin: 5,
    bottom: 20
  },
});
export default HomeScreen;
