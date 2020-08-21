import React, { useState, Component } from "react";
import { StyleSheet, View } from "react-native";
import LocationForm from "../components/LocationForm";
import LocationList from "../components/LocationList";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  List,
  Left,
  Right,
  Icon,
  ListItem,
} from "native-base";

export default function LocationsScreen({ navigation }) {
  const [location, setLocation] = useState([{ id: 1, name: "Next Academy" }]);
  return (
    <View style={styles.container}>
      <LocationForm
        location={location}
        setLocation={setLocation}
      ></LocationForm>
      <LocationList location={location}></LocationList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "rgb(238, 124, 109)",
    alignSelf: "stretch",
    width: 350,
  },
  listitem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
