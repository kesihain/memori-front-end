import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to my locations"
      onPress={() => navigation.navigate("locations")}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
