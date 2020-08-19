import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LocationsScreen({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate("home")}>go back home</Text>
      <Text>set ur locations!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
